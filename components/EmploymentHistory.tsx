import time from '@/data/time.json';
import {EmploymentItem} from "@/components/EmploymentItem";
export function EmploymentHistory() {
    const items = time.map(item => <EmploymentItem key={item.name} {...item}  />);
    return (
        <>{items}</>
    );
}
