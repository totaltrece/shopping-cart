import { AbstractControl } from '@angular/forms';

function ValidateUrl(control: AbstractControl){
    if( !control.value.startsWith('https') || !control.value.includes('.es')){
        return {invalidUrl: true}
    }
    return null;
}

export { ValidateUrl }