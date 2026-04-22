pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/SatriaBPY/Web-testing-demoblaze',
                    credentialsId: 'github-token'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t sbpy/playwright-tests:latest .'
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-token',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                    sh 'docker push sbpy/playwright-tests:latest'
                }
            }
        }

        stage('Run Playwright Tests in Container') {
            steps {
                script {
                   
                    sh """
                        echo "Cleaning allure-results folder..."
                        rm -rf ${WORKSPACE}/allure-results
                        mkdir -p ${WORKSPACE}/allure-results
                        rm -rf ${WORKSPACE}/src/data/users.json
                        mkdir -p ${WORKSPACE}/src/data
                    """
                    
                   
                    sh """
                        docker run --rm \
                          -v ${WORKSPACE}/allure-results:/app/allure-results \
                          -v ${WORKSPACE}/src/data:/app/src/data \
                          sbpy/playwright-tests:latest
                    """
                }
            }
        }

        stage('Publish Allure Report') {
            steps {
                allure commandline: 'allure-cli', 
                       includeProperties: false, 
                       jdk: '', 
                       resultPolicy: 'ALWAYS',
                       results: [[path: 'allure-results']]
            }
        }
    }

    post {
        always {
            script {
                echo "Tests completed, cleaning up..."
                sleep time: 3, unit: 'SECONDS'
                cleanWs()
            }
        }
    }
}
