import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name:"gender"})
export class GenderPipe implements PipeTransform
{
    transform(value: string, gender: string, mStatus: string) {

        if(gender.toUpperCase() === "FEMALE" && mStatus.toUpperCase() === "MARRIED" )
        {
            return "MRS "+value;
        }
        else if(gender.toUpperCase() === "FEMALE" && mStatus.toUpperCase() === "UNMARRIED"){
            return "MS "+value;
        }
        else
        {
            return "MR "+value;
        }

    }


}
