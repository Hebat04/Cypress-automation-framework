pipeline{
    agent any 

    tools{nodejs "node"}

    Stages{
        stage('Cypress Parallel Test Suite'){
            parallel {
                stage('Slave Node1'){
                    agent {
                        label ""
                    }
                }
            }
        }
    }
}