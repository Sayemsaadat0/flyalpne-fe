import { cn } from "@/lib/utils";
import { IconType, iconVariants } from '../icons';


export const QuotationIcon: React.FC<IconType> = ({ size, className, ...props }) => {
    return (
        <svg {...props} className={cn(iconVariants({ size, className }))} xmlns="http://www.w3.org/2000/svg" width="193" height="185" viewBox="0 0 193 185" fill="none">
            <path opacity="0.8" d="M192.797 0.491699V30.5475C183.511 32.5023 175.692 37.1451 169.339 44.4758C163.474 51.8065 159.076 61.092 156.143 72.3324C153.7 83.084 152.478 95.0574 152.478 108.253H186.199V184.492H114.359V116.316C114.359 87.9711 118.268 65.9791 126.088 50.3403C134.396 34.2128 144.659 22.4838 156.876 15.1531C169.094 7.33368 181.068 2.44655 192.797 0.491699ZM79.1713 0.491699V30.5475C69.8858 32.5023 62.0664 37.1451 55.7132 44.4758C49.8486 51.8065 45.4502 61.092 42.5179 72.3324C40.0744 83.084 38.8526 95.0574 38.8526 108.253H71.8406V184.492H0V116.316C0 87.9711 4.15405 65.9791 12.4621 50.3403C20.7703 34.2128 31.0332 22.4838 43.251 15.1531C55.4688 7.33368 67.4422 2.44655 79.1713 0.491699Z" fill="currentColor" />
        </svg>
    );
};







export const CurveIcon: React.FC<IconType> = ({ size, className, ...props }) => {
    return (
        <svg {...props} className={cn(iconVariants({ size, className }))} width="114" height="35" viewBox="0 0 114 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M112 23.055C1.84952 -10.9034 -7.36586 1.26087 7.50443 32.6853" stroke="currentColor" strokeWidth="4" strokeMiterlimit="3.8637" strokeLinecap="round" />
        </svg>
    );
};


