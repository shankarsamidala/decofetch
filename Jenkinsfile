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
                 sh "ssh -o StrictHostKeyChecking=no -l ubuntu 3.111.40.101 'whoami'"
                 sh "ssh -o StrictHostKeyChecking=no -l ubuntu 3.111.40.101 '${prod}'"


                    }
         }
        }



    }

}
