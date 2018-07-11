node('master') {
    dir("${env.APP_ROOT}") {
        stage('Git checkout interface'){
            sh 'cd interface && git checkout staging && git pull'
        }
        stage('Set API URL'){
            sh 'echo "export const API_URL = \'$API_URL\'" > interface/src/constants.js'
        }
        stage('Stop containers'){
            sh 'docker-compose stop interface && yes y | docker-compose rm interface'
        }
        stage('Build docker interface'){
            sh 'docker-compose build interface'
        }
        stage('Up docker containers'){
            sh 'docker-compose up -d interface'
        }
    }
}