import Image from 'next/image'

import burgerflipper from '../public/profession/Profession_burgerflipper.png';
import burglar from '../public/profession/Profession_burglar.png';
import carpenter from '../public/profession/Profession_carpenter.png';
import chef from '../public/profession/Profession_chef.png';
import constructionworker from '../public/profession/Profession_constructionworker.png';
import doctor from '../public/profession/Profession_doctor.png';
import electrician from '../public/profession/Profession_electrician.png';
import engineer from '../public/profession/Profession_engineer.png';
import farmer from '../public/profession/Profession_farmer.png';
import fireofficer from '../public/profession/Profession_fireofficer.png';
import fisherman from '../public/profession/Profession_fisherman.png';
import fitnessinstructor from '../public/profession/Profession_fitnessinstructor.png';
import lumberjack from '../public/profession/Profession_lumberjack.png';
import mechanics from '../public/profession/Profession_mechanic.png';
import metalworker from '../public/profession/Profession_metalworker.png';
import nurse from '../public/profession/Profession_nurse.png';
import parkranger from '../public/profession/Profession_parkranger.png';
import policeofficer from '../public/profession/Profession_policeofficer.png';
import repairman from '../public/profession/Profession_repairman.png';
import securityguard from '../public/profession/Profession_securityguard.png';
import veteran from '../public/profession/Profession_veteran.png';

export function professionSelector(profession) {

    const width = 60;
    const height = 60;

    if(profession === 'burgerflipper'){
        return <Image src={burgerflipper} width={width} height={height} alt="profession icon"/>
    } else if (profession === 'burglar'){
        return <Image src={burglar} width={width} height={height} alt="profession icon"/>
    } else if (profession === 'carpenter'){
        return <Image src={carpenter} width={width} height={height} alt="profession icon"/>
    } else if (profession === 'chef'){
        return <Image src={chef} width={width} height={height} alt="profession icon"/>
    } else if (profession === 'constructionworker'){
        return <Image src={constructionworker} width={width} height={height} alt="profession icon"/>
    } else if (profession === 'doctor'){
        return <Image src={doctor} width={width} height={height} alt="profession icon"/>
    } else if (profession === 'electrician'){
        return <Image src={electrician} width={width} height={height} alt="profession icon"/>
    } else if (profession === 'engineer'){
        return <Image src={engineer} width={width} height={height} alt="profession icon"/>
    } else if (profession === 'farmer'){
        return <Image src={farmer} width={width} height={height} alt="profession icon"/>
    } else if (profession === 'fireofficer'){
        return <Image src={fireofficer} width={width} height={height} alt="profession icon"/>
    } else if (profession === 'fisherman'){
        return <Image src={fisherman} width={width} height={height} alt="profession icon"/>
    } else if (profession === 'fitnessinstructor'){
        return <Image src={fitnessinstructor} width={width} height={height} alt="profession icon"/>
    } else if (profession === 'lumberjack'){
        return <Image src={lumberjack} width={width} height={height} alt="profession icon"/>
    } else if (profession === 'mechanics'){
        return <Image src={mechanics} width={width} height={height} alt="profession icon"/>
    } else if (profession === 'metalworker'){
        return <Image src={metalworker} width={width} height={height} alt="profession icon"/>
    } else if (profession === 'nurse'){
        return <Image src={nurse} width={width} height={height} alt="profession icon"/>
    } else if (profession === 'parkranger'){
        return <Image src={parkranger} width={width} height={height} alt="profession icon"/>
    } else if (profession === 'policeofficer'){
        return <Image src={policeofficer} width={width} height={height} alt="profession icon"/>
    } else if (profession === 'repairman'){
        return <Image src={repairman} width={width} height={height} alt="profession icon"/>
    } else if (profession === 'securityguard'){
        return <Image src={securityguard} width={width} height={height} alt="profession icon"/>
    } else if (profession === 'veteran'){
        return <Image src={veteran} width={width} height={height} alt="profession icon"/>
    } else {
        return "unemployed";
    }
}
