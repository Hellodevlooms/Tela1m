
import React from 'react'

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-card rounded-lg shadow-md p-6 border border-border">
        <h1 className="text-3xl font-bold text-card-foreground mb-4">
          Tela1m - Dashboard
        </h1>
        <p className="text-muted-foreground mb-6">
          Aplicação de controle - Dashboard principal
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-primary/5 p-4 rounded-lg border border-primary/20 hover:bg-primary/10 transition-colors">
            <h3 className="text-lg font-semibold text-primary mb-2">
              Módulo 1
            </h3>
            <p className="text-primary/80">
              Funcionalidade em desenvolvimento
            </p>
          </div>
          
          <div className="bg-secondary p-4 rounded-lg border border-border hover:bg-secondary/80 transition-colors">
            <h3 className="text-lg font-semibold text-secondary-foreground mb-2">
              Módulo 2
            </h3>
            <p className="text-muted-foreground">
              Funcionalidade em desenvolvimento
            </p>
          </div>
          
          <div className="bg-muted p-4 rounded-lg border border-border hover:bg-muted/80 transition-colors">
            <h3 className="text-lg font-semibold text-card-foreground mb-2">
              Módulo 3
            </h3>
            <p className="text-muted-foreground">
              Funcionalidade em desenvolvimento
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
