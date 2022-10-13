
pipeline{

	agent any

	
	stages {

		stage('Build') {

			steps {
				sh 'sudo docker build -t dittojoseph/eksdeployment:latest .'
               
			}
		}
        
        stage('login') {

            steps {
        
		        withCredentials([string(credentialsId: 'DOCKER_PWD', variable: 'PASSWORD')]) {
                    sh 'sudo docker login -u dittojoseph -p $PASSWORD'
                }
            }
        }
		stage('Push') {

			steps {
				sh 'sudo docker push dittojoseph/eksdeployment:latest'
			}
		}

        stage('eks deploy') {

			steps {
				sh 'kubectl get -o yaml deploy/myapp-deployment > deploy.yaml'
             //   sh "sed -i 's/hellonodejs:latest/hellonodejs:eks/g' deploy.yaml"
                sh 'kubectl apply -f deploy.yaml'
                sh 'kubectl rollout restart deployment myapp-deployment'
			}
		}
	}

	post {
		always {

            		cleanWs()
			
            		echo "done"
		}
	}

}
