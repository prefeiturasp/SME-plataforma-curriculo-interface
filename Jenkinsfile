pipeline {
    agent {
      node { 
        label 'sme-nodes10'
      }
    }
    
    options {
      buildDiscarder(logRotator(numToKeepStr: '5', artifactNumToKeepStr: '5'))
      disableConcurrentBuilds()
      skipDefaultCheckout()  
    }
    
        
  stages {
    stage('CheckOut') {
        steps {
          checkout scm
        }
      }
      
    stage('Analise Codigo') {
          when {
            branch 'staging'
          }
            steps {
                sh 'sonar-scanner \
                -Dsonar.projectKey=SME-plataforma-curriculo-interface \
                -Dsonar.sources=. \
                -Dsonar.host.url=http://sonar.sme.prefeitura.sp.gov.br \
                -Dsonar.login=f019456c8286fd2c5af1d861b9f3cdc97c939226'
            }
    }

      
    stage('Docker build DEV') {
        when {
          branch 'develop'
        }
          steps {
          // Start JOB Rundeck para build das imagens Docker
      
          script {
           step([$class: "RundeckNotifier",
              includeRundeckLogs: true,
                               
              //JOB DE BUILD
              jobId: "954d79f6-3744-4399-89df-93723c737138",
              nodeFilters: "",
              //options: """
              //     PARAM_1=value1
               //    PARAM_2=value2
              //     PARAM_3=
              //     """,
              rundeckInstance: "Rundeck-SME",
              shouldFailTheBuild: true,
              shouldWaitForRundeckJob: true,
              tags: "",
              tailLog: true])
           }
        }
      }

    stage('Deploy DEV') {
        when {
          branch 'develop'
        }
          steps {
            //Start JOB Rundeck para update de deploy Kubernetes DEV
         
            script {
                step([$class: "RundeckNotifier",
                  includeRundeckLogs: true,
                  jobId: "944e217f-dbf7-44f9-ae7e-51b22fb8a59e",
                  nodeFilters: "",
                  //options: """
                  //     PARAM_1=value1
                  //    PARAM_2=value2
                  //     PARAM_3=
                  //     """,
                  rundeckInstance: "Rundeck-SME",
                  shouldFailTheBuild: true,
                  shouldWaitForRundeckJob: true,
                  tags: "",
                  tailLog: true])
              }
          }
      }
		
	  stage('Docker build staging') {
            when {
                branch 'staging'
            }
            steps {
              // Start build das imagens Docker
      
          script {
            step([$class: "RundeckNotifier",
                includeRundeckLogs: true,
                    
                
                //JOB DE BUILD
                jobId: "37e9e194-559b-4152-91ff-d99a7a4c3ae3",
                nodeFilters: "",
                //options: """
                //     PARAM_1=value1
                //    PARAM_2=value2
                //     PARAM_3=
                //     """,
                rundeckInstance: "Rundeck-SME",
                shouldFailTheBuild: true,
                shouldWaitForRundeckJob: true,
                tags: "",
                tailLog: true])
           }
          }
        }    
       
    stage('Deploy staging') {
          when {
            branch 'staging'
          }
          steps {
            
            timeout(time: 24, unit: "HOURS") {
               telegramSend("${JOB_NAME}...O Build ${BUILD_DISPLAY_NAME} - Requer uma aprovação para deploy !!!\n Consulte o log para detalhes -> [Job logs](${env.BUILD_URL}console)\n")
               input message: 'Deseja realizar o deploy?', ok: 'SIM', submitter: 'rodolpho_azeredo'
            }
            //Start JOB Rundeck para update de imagens no host homologação 
         
            script {
                step([$class: "RundeckNotifier",
                includeRundeckLogs: true,
                jobId: "9be5ac85-5f8f-44fe-aace-444a9fbae234",
                nodeFilters: "",
                //options: """
                //     PARAM_1=value1
                //    PARAM_2=value2
                //     PARAM_3=
                //     """,
                rundeckInstance: "Rundeck-SME",
                shouldFailTheBuild: true,
                shouldWaitForRundeckJob: true,
                tags: "",
                tailLog: true])
            }
         }
        }
	    
	  stage('Docker build PROD') {
        when {
          branch 'master'
        }
        steps {
            
            // Start JOB Rundeck para build das imagens Docker
      
            script {
              step([$class: "RundeckNotifier",
                includeRundeckLogs: true,
                
                
                //JOB DE BUILD
                jobId: "a26351b1-7234-4332-a23e-9f45ca6e496e",
                nodeFilters: "",
                //options: """
                //     PARAM_1=value1
                //    PARAM_2=value2
                //     PARAM_3=
                //     """,
                rundeckInstance: "Rundeck-SME",
                shouldFailTheBuild: true,
                shouldWaitForRundeckJob: true,
                tags: "",
                tailLog: true])
            }
         }
      }           
    
    stage('Deploy PROD') {
            when {
                branch 'master'
            }
            steps {
                timeout(time: 24, unit: "HOURS") {
                telegramSend("${JOB_NAME}...O Build ${BUILD_DISPLAY_NAME} - Requer uma aprovação para deploy !!!\n Consulte o log para detalhes -> [Job logs](${env.BUILD_URL}console)\n")
                input message: 'Deseja realizar o deploy?', ok: 'SIM', submitter: 'rodolpho_azeredo'
                }
                    
            
                script {
                    step([$class: "RundeckNotifier",
                    includeRundeckLogs: true,
                    jobId: "3f130892-004e-4afc-8f02-254eafe3cbf8",
                    nodeFilters: "",
                    //options: """
                    //     PARAM_1=value1
                    //    PARAM_2=value2
                    //     PARAM_3=
                    //     """,
                    rundeckInstance: "Rundeck-SME",
                    shouldFailTheBuild: true,
                    shouldWaitForRundeckJob: true,
                    tags: "",
                    tailLog: true])
                }
        
        
            }
        }
  }    


    
post {
        always {
          echo 'One way or another, I have finished'
        }
        success {
	  	    
          telegramSend("${JOB_NAME}...O Build ${BUILD_DISPLAY_NAME} - Esta ok !!!\n Consulte o log para detalhes -> [Job logs](${env.BUILD_URL}console)\n\n Uma nova versão da aplicação esta disponivel!!!")
        }
        unstable {
          
          telegramSend("O Build ${BUILD_DISPLAY_NAME} <${env.BUILD_URL}> - Esta instavel ...\nConsulte o log para detalhes -> [Job logs](${env.BUILD_URL}console)")
        }
        failure {
          
          telegramSend("${JOB_NAME}...O Build ${BUILD_DISPLAY_NAME}  - Quebrou. \nConsulte o log para detalhes -> [Job logs](${env.BUILD_URL}console)")
        }
        changed {
          echo 'Things were different before...'
        }
        aborted {
          
          telegramSend("O Build ${BUILD_DISPLAY_NAME} - Foi abortado.\nConsulte o log para detalhes -> [Job logs](${env.BUILD_URL}console)")
        }
    }
}
