pipeline {
    agent any
    
    options {
        timeout(time: 30, unit: 'MINUTES')
        timestamps()
        buildDiscarder(logRotator(numToKeepStr: '10'))
    }
    
    parameters {
        string(name: 'BROWSER', defaultValue: 'chromium', description: 'Browser to run tests on')
        booleanParam(name: 'HEADLESS', defaultValue: true, description: 'Run tests in headless mode')
        string(name: 'WORKERS', defaultValue: '1', description: 'Number of parallel workers')
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
                script {
                    // Check Node.js and npm versions
                    sh 'node --version'
                    sh 'npm --version'
                }
                echo '========== Installing dependencies =========='
                sh 'npm install'
            }
        }
        
        stage('Install Browsers') {
            steps {
                echo '========== Installing Playwright browsers =========='
                sh 'npx playwright install --with-deps'
            }
        }
        
        stage('Run Tests') {
            steps {
                echo '========== Running Playwright tests =========='
                script {
                    try {
                        sh '''
                            npx playwright test \
                                --project=${BROWSER} \
                                --workers=${WORKERS} \
                                --reporter=html,json,junit,list \
                                --output=test-results
                        '''
                    } catch (Exception e) {
                        echo "Tests failed: ${e}"
                        currentBuild.result = 'FAILURE'
                    }
                }
            }
        }
        
        stage('Generate Allure Report') {
            when {
                expression { fileExists('allure-results') }
            }
            steps {
                echo '========== Generating Allure Report =========='
                script {
                    sh '''
                        if command -v allure &> /dev/null; then
                            allure generate allure-results --clean -o allure-report
                        else
                            echo "Allure CLI not found, skipping Allure report generation"
                        fi
                    '''
                }
            }
        }
        
        stage('Archive Results') {
            steps {
                echo '========== Archiving test results =========='
                archiveArtifacts artifacts: '''
                    playwright-report/**/*,
                    test-results/**/*,
                    allure-report/**/*,
                    allure-results/**/*
                ''', allowEmptyArchive: true, onlyIfSuccessful: false
            }
        }
    }
    
    post {
        always {
            echo '========== Cleanup and reporting =========='
            
            // Publish HTML Report
            publishHTML(target: [
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright HTML Report',
                keepAll: true,
                alwaysLinkToLastBuild: true
            ])
            
            // Publish JUnit Results
            junit testResults: 'results.json/**/*.xml', allowEmptyResults: true
            
            // Publish Allure Report if available
            script {
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
            
            // Clean workspace after build
            cleanWs()
        }
        
        success {
            echo '========== Build SUCCESS =========='
            script {
                // Optional: Send success notification
                // emailext(
                //     to: '${DEFAULT_RECIPIENTS}',
                //     subject: 'Build Successful: ${JOB_NAME} #${BUILD_NUMBER}',
                //     body: 'Playwright tests passed successfully.'
                // )
            }
        }
        
        failure {
            echo '========== Build FAILED =========='
            script {
                // Optional: Send failure notification
                // emailext(
                //     to: '${DEFAULT_RECIPIENTS}',
                //     subject: 'Build Failed: ${JOB_NAME} #${BUILD_NUMBER}',
                //     body: 'Playwright tests failed. Check the build logs for details.'
                // )
            }
        }
        
        unstable {
            echo '========== Build UNSTABLE =========='
        }
    }
}
