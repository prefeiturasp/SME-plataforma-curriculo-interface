pipeline {
    environment {
      branchname =  env.BRANCH_NAME.toLowerCase()
      kubeconfig = getKubeconf(env.branchname)
      registryCredential = 'jenkins_registry'
      namespace = "${env.branchname == 'develop' ? 'curriculo-dev' : env.branchname == 'staging' ? 'curriculo-hom' : env.branchname == 'staging-r2' ? 'curriculo-hom2' : 'sme-curriculo' }"
    }
  
    agent { kubernetes { 
              label 'builder'
              defaultContainer 'builder'
            }
          }

    options {
      buildDiscarder(logRotator(numToKeepStr: '5', artifactNumToKeepStr: '5'))
      disableConcurrentBuilds()
      skipDefaultCheckout()
    }
  
    stages {

        stage('CheckOut') {            
            steps { checkout scm }            
        }

        stage('AnaliseCodigo') {
	      when { branch 'staging' }
          steps {
              withSonarQubeEnv('sonarqube-local'){
                sh 'echo "[ INFO ] Iniciando analise Sonar..." && sonar-scanner \
                -Dsonar.projectKey=SME-plataforma-curriculo-interface \
                -Dsonar.sources=.'
            }
          }
        }

        stage('Build') {
          agent { kubernetes { 
              label 'builder'
              defaultContainer 'builder'
            }
          }
          when { anyOf { branch 'master'; branch 'main'; branch "story/*"; branch 'develop'; branch 'staging'; } } 
          steps {
            script {
              checkout scm
              imagename1 = "registry.sme.prefeitura.sp.gov.br/${env.branchname}/curriculo-interface"
              dockerImage1 = docker.build(imagename1, "-f Dockerfile .")
              docker.withRegistry( 'https://registry.sme.prefeitura.sp.gov.br', registryCredential ) {
              dockerImage1.push()
              }
              sh "docker rmi $imagename1"
            }
          }
        }
	    
        stage('Deploy'){
            when { anyOf {  branch 'master'; branch 'main'; branch 'develop'; branch 'staging';  } }        
            steps {
                script{
                    if ( env.branchname == 'main' ||  env.branchname == 'master' ) {
                        sendTelegram("🤩 [Deploy ${env.branchname}] Job Name: ${JOB_NAME} \nBuild: ${BUILD_DISPLAY_NAME} \nMe aprove! \nLog: \n${env.BUILD_URL}")
                        withCredentials([string(credentialsId: 'aprovadores_curriculo', variable: 'aprovadores')]) {
                            timeout(time: 24, unit: "HOURS") {
                                input message: 'Deseja realizar o deploy?', ok: 'SIM', submitter: "${aprovadores}"
                            }
                        }
                    }
                    withCredentials([file(credentialsId: "${kubeconfig}", variable: 'config')]){
			sh('rm -f '+"$home"+'/.kube/config')
                        sh('cp $config '+"$home"+'/.kube/config')
                        sh 'kubectl rollout restart deployment/curriculo-interface -n ${namespace}'
                        sh('rm -f '+"$home"+'/.kube/config')
                    }
                }
            }           
        }    
    }

  post {
    success { sendTelegram("🚀 Job Name: ${JOB_NAME} \nBuild: ${BUILD_DISPLAY_NAME} \nStatus: Success \nLog: \n${env.BUILD_URL}console") }
    unstable { sendTelegram("💣 Job Name: ${JOB_NAME} \nBuild: ${BUILD_DISPLAY_NAME} \nStatus: Unstable \nLog: \n${env.BUILD_URL}console") }
    failure { sendTelegram("💥 Job Name: ${JOB_NAME} \nBuild: ${BUILD_DISPLAY_NAME} \nStatus: Failure \nLog: \n${env.BUILD_URL}console") }
    aborted { sendTelegram ("😥 Job Name: ${JOB_NAME} \nBuild: ${BUILD_DISPLAY_NAME} \nStatus: Aborted \nLog: \n${env.BUILD_URL}console") }
  }
}
def sendTelegram(message) {
    def encodedMessage = URLEncoder.encode(message, "UTF-8")
    withCredentials([string(credentialsId: 'telegramToken', variable: 'TOKEN'),
    string(credentialsId: 'telegramChatId', variable: 'CHAT_ID')]) {
        response = httpRequest (consoleLogResponseBody: true,
                contentType: 'APPLICATION_JSON',
                httpMode: 'GET',
                url: 'https://api.telegram.org/bot'+"$TOKEN"+'/sendMessage?text='+encodedMessage+'&chat_id='+"$CHAT_ID"+'&disable_web_page_preview=true',
                validResponseCodes: '200')
        return response
    }
}
def getKubeconf(branchName) {
    if("main".equals(branchName)) { return "config_prd"; }
    else if ("master".equals(branchName)) { return "config_prd"; }
    else if ("staging".equals(branchName)) { return "config_release"; }
    else if ("develop".equals(branchName)) { return "config_release"; }  
}
