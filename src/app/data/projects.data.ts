import { ProjectModel } from '../models/project.model';

export const PROJECTS: ProjectModel[] = [
    {
      imageUrl: 'images/gravitation.png',
      imageDescription: 'Imagem do projeto 1',
      title: 'The Gravity',
      subtitle: 'Mini simulação do movimento gravitacional entre a Terra e a lua. Usando a formula da gravitação universal. Apresentado como trabalho final de uma disciplina.',
      tags: ['Angular', 'Node', 'MongoDB'],
      gitUrl: 'https://github.com',
      deployUrl: 'https://deploy.com',
      type: 'FRONTEND'
    },
  ]