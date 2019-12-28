import { AbstractControl, ValidationErrors } from '@angular/forms';
import { resolve } from 'url';

export class CustomValidators {
    public static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0) {
            return { cannotContainSpace: true }
        }
        else return null;
    }

    public static uniqueName(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if ((control.value as string) === "nash")
                    resolve({ uniqueName: true });
                else
                    resolve(null);

            }, 2000);
        });
    }

    public static validOldPassword(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!((control.value as string) === "1234"))
                    resolve({ invalidOldPassword: true });
                else
                    resolve(null);
            }, 3000);
        });
    }

    public static passwordsMustMatch(control: AbstractControl) {
        let newPassword = control.get('newPassword').value;
        let confirmPassord = control.get('confirmPassword').value;
        if (newPassword !== confirmPassord) return { passwordsMustMatch: true };
        return null;
    }
}
