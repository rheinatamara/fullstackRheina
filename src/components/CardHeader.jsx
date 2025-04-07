import StarIcon from '../components/canvas/aboutIcons/Star'
import { twMerge } from 'tailwind-merge';
import { styles } from "../styles";
export const CardHeader = ({title, description,className}) => {
    return (
        <div className={twMerge("flex flex-col p-6 md:py-8 md:px-10", className)}>
            <div className="inline-flex items-center gap-2">
                <StarIcon className="size-9" color={"#915eff"}/>
                <h3 className={`${styles.sectionSmallTitle}`} >{title}</h3>
            </div>
                <p className="text-sm lg:text-base text-white/60 mt-2">{description}</p>
        </div>
    )
}