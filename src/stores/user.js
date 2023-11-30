import { auth } from





actions: {
    try {
        await createUserWithEmailAndPassword(auth,email,password);
    } catch (error) {
        switch (error.code) {
            case "auth/email-already-in-use":
                alert ("Email already in use");
                break;
                case "auth/invalid-email":
                    alert ("Invalid email");
                    break;
        }  
        return; 
    }
    this.user = auth.currentUser;
}
