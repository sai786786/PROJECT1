pipeline {
    agent 
    stages {
        stage('say hi') {
            steps {
                echo "I don't need no node"
            }
        }
    {
    def app

    stage('Clone repository') {
        /* Let's make sure we have the repository cloned to our workspace */

        
    }

    stage('Build image') {
        /* This builds the actual image; synonymous to
         * docker build on the command line */
        steps {

        app = docker.build("saikiran786/helloworld")
        }
    }

    stage('Test image') {
        /* Ideally, we would run a test framework against our image.
         * For this example, we're using a Volkswagen-type approach ;-) */

        steps{
            sh 'echo "Tests passed"'
        }
    }

    stage('Push image') {
        /* Finally, we'll push the image with two tags:
         * First, the incremental build number from Jenkins
         * Second, the 'latest' tag.
         * Pushing multiple tags is cheap, as all the layers are reused. */
        /*docker.withRegistry('https://hub.docker.com/', 'f0249c23-5f8c-4a57-b876-eadb5557076d') {
           * app.push("${env.BUILD_NUMBER}")
            *app.push("latest")
            *sh  'docker login --username=saikiran786 --email=saikiran786786@gmail.com --password=9966786786'*/
        steps{
        docker.withRegistry('https://registry.hub.docker.com', 'f0249c23-5f8c-4a57-b876-eadb5557076d') {
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
              }
        }
    }
    stage('deploy') {
            agent {
                label 'HYD'
            }
            steps {
                sh 'deploy-code-here'
        }
    }

    }
