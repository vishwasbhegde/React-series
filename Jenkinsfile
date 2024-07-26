pipeline {
    agent any

    tools {
        nodejs "NodeJS" // The name of the NodeJS installation you configured
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/yourusername/your-repo.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                // Add your test commands here, for example:
                // sh 'npm test'
            }
        }

        stage('Build') {
            steps {
                // Add your build commands here, if any
                echo 'Building...'
            }
        }

        stage('Deploy') {
            steps {
                // Add your deployment commands here, if any
                echo 'Deploying...'
            }
        }
    }

    post {
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
