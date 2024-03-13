import { FormGroup } from "@angular/forms"

export function confirmPasswordValidator(controlName: string, matchControlName: string){
    return(formGroup: FormGroup) =>{
        const passwordControl = formGroup.controls[controlName];
        const confirmPasswordControl = formGroup.controls[matchControlName]  
        
        if (confirmPasswordControl.errors && confirmPasswordControl.errors['confirmPasswordValidator']) {
            return;  //return if another error has been found
        }
        
        if (passwordControl.value !== confirmPasswordControl.value){
            confirmPasswordControl.setErrors({confirmPasswordValidator: true})
        }else{
            confirmPasswordControl.setErrors(null);
        }
    }
}