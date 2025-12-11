import { UserRoundPen, UserRoundPlus, Users, UserSearch } from 'lucide-react'
import './StatsOverview.css'

const StatsOverview = () => {
  return (
    <div className='overview'>
      <div className='overview-column'>
        <Users strokeWidth={1} size={50} color='#4464c5'/>
        <div>
          <p>Contatos</p>
          <span className='overview-number'>567</span>
        </div>
      </div>
      <div className='overview-column'>
        <UserRoundPen strokeWidth={1} size={50} color='#46af65'/>
        <div>
          <p>Lideranças</p>
          <span className='overview-number'>51</span>
        </div>
      </div>
      <div className='overview-column'>
        <UserRoundPlus strokeWidth={1} size={50} color='#46afa8'/>
        <div>
          <p>Últimos 7 dias</p>
          <span className='overview-number'>1</span>
        </div>
      </div>
      <div className='overview-column'>
        <UserSearch strokeWidth={1} size={50} color='#dc5050'/>
        <div>
          <p>Sem Local</p>
          <span className='overview-number'>113</span>
        </div>
      </div>
    </div>
  )
}

export default StatsOverview
