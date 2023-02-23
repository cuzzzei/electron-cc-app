import { Agent } from '/@/types/agent'
import {
   BanknotesIcon,
   CakeIcon,
   ChatBubbleLeftEllipsisIcon,
   ClockIcon,
   PhoneIcon,
   UserCircleIcon,
   WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline'

interface AgentInfoProps {
   agent: Agent
}

const Label = ({ icon, text }: { icon: React.ReactNode; text: string }) => {
   return (
      <div className='d-flex align-items-end gap-1 mb-4'>
         <div style={{ width: '25px', marginRight: '10px' }}>{icon}</div>
         <p className='p-0 m-0'>{text}</p>
      </div>
   )
}

export const AgentDetails = ({ agent }: AgentInfoProps) => {
   return (
      <div className='p-4 p-lg-5'>
         <h3 className='mb-4 fw-bold'>Agent profile</h3>

         <Label
            icon={<UserCircleIcon />}
            text={`${agent.getName()}`}
         />

         <Label
            icon={<CakeIcon />}
            text={`${agent.getAge()} years old`}
         />

         <Label
            icon={<WrenchScrewdriverIcon />}
            text={`${agent.getSpecialty()}`}
         />

         <Label
            icon={<PhoneIcon />}
            text={`Extension ${agent.getExtension()}`}
         />

         <Label
            icon={<ClockIcon />}
            text={`${agent.getStartTime()} - ${agent.getEndTime()}`}
         />

         <Label
            icon={<BanknotesIcon />}
            text={`${agent.getOvertime()} extra hours`}
         />

         <Label
            icon={<ChatBubbleLeftEllipsisIcon />}
            text={`${agent.getCallHistory().getLength()} calls received today`}
         />
      </div>
   )
}
