export class User{
    public logedIn = false;
    
    constructor(
        public fullName : string,
        public email : string,
        public password : string,
        public admin : boolean
    ) {}
}