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
                sh '''
                docker run --rm sbpy/playwright-tests:latest \
                npx playwright test --reporter=line
                '''
            }
        }

        stage('Publish Report') {
            steps {
                allure includeProperties: false,
                       results: [[path: 'allure-report']]
            }
        }
    }

    post {
        always {
            cleanWs() 
        }
    }
}
