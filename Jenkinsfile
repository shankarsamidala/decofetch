 pipeline {
    agent any

environment {
		DOCKERHUB_CREDENTIALS=credentials('dockerhub')

        def prod = "cd /home/ubuntu/beumont/decofetch && \
            sudo git pull "
    
	}

    stages {


        stage('Building Master Container') {
            when {
                branch 'main'
            }
            steps {

             sshagent(['Decofetch']) {
                 sh "ssh -o StrictHostKeyChecking=no -l ubuntu 13.41.69.216 'whoami'"
                 sh "ssh -o StrictHostKeyChecking=no -l ubuntu 13.41.69.216 '${prod}'"


                    }
         }
        }



    }

}
