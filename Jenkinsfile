pipeline {
agent any


options {
    timeout(time: 30, unit: 'MINUTES')
    timestamps()
    buildDiscarder(logRotator(numToKeepStr: '10'))
}

parameters {
    string(
        name: 'BROWSER',
        defaultValue: 'chromium',
        description: 'Browser to run tests on'
    )
    booleanParam(
        name: 'HEADLESS',
        defaultValue: true,
        description: 'Run tests in headless mode'
    )
    string(
        name: 'WORKERS',
        defaultValue: '1',
        description: 'Number of parallel workers'
    )
}

environment {
    NODE_ENV = 'ci'
    CI = 'true'
    PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD = 'false'
}

stages {

    stage('Checkout') {
        steps {
            echo '========== Checking out code =========='
            deleteDir()
            checkout scm
        }
    }

    stage('Setup') {
        steps {
            echo '========== Setting up environment =========='

            bat 'node --version'
            bat 'npm --version'

            echo '========== Installing dependencies =========='
            bat 'npm install'
        }
    }

    stage('Install Browsers') {
        steps {
            echo '========== Installing Playwright browsers =========='
            bat 'npx playwright install'
        }
    }

    stage('Run Tests') {
        steps {
            echo '========== Running Playwright tests =========='

            script {
                echo "BROWSER: ${params.BROWSER}"
                echo "WORKERS: ${params.WORKERS}"
                try {
                    bat """
                        npx playwright test checkBox.spec.js^
                        --project=%BROWSER% ^
                        --workers=%WORKERS%
                    """
                } catch (Exception e) {
                    echo "Tests failed: ${e}"
                    currentBuild.result = 'FAILURE'
                    throw e
                }
            }
        }
    }

    stage('Archive Results') {
        steps {
            echo '========== Archiving test results =========='

            archiveArtifacts(
                artifacts: '''
                    playwright-report/**/*,
                    test-results/**/*,
                    allure-report/**/*,
                    allure-results/**/*
                ''',
                allowEmptyArchive: true,
                onlyIfSuccessful: false
            )
        }
    }
}

post {

    always {
        echo '========== Cleanup and reporting =========='

        script {

            if (fileExists('playwright-report/index.html')) {
                publishHTML(target: [
                    reportDir: 'playwright-report',
                    reportFiles: 'index.html',
                    reportName: 'Playwright HTML Report',
                    keepAll: true,
                    alwaysLinkToLastBuild: true
                ])
            }

            try {
                junit(
                    testResults: 'test-results/**/*.xml',
                    allowEmptyResults: true
                )
            } catch (Exception ex) {
                echo "No JUnit reports found."
            }

            if (fileExists('allure-report/index.html')) {
                publishHTML(target: [
                    reportDir: 'allure-report',
                    reportFiles: 'index.html',
                    reportName: 'Allure Report',
                    keepAll: true,
                    alwaysLinkToLastBuild: true
                ])
            }
        }

        cleanWs()
    }

    success {
        echo '========== Build SUCCESS =========='
    }

    failure {
        echo '========== Build FAILED =========='

        script {
            echo 'One or more tests failed. Check reports and console logs.'
        }
    }

    unstable {
        echo '========== Build UNSTABLE =========='
    }
}

}
