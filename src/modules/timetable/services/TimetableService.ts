import BaseService from '@/services/BaseService'

 const table = 'institution' as const // Modifique para sua tabela

type TimetableServiceTable = typeof table

export default class TimetableService extends BaseService<TimetableServiceTable> {
  constructor() {
     super(table) // Passando o nome da tabela para a classe base
  }
}
