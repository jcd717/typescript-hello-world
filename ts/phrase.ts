export {phrase};


class Mots {
    private static _mot1=['Hello','Bonjour'];
    private static _mot2=['World','le Monde'];

    private static getMot(mots:string[]):string {
        return mots[Math.floor(Math.random()*mots.length)]
    }

    static get mot1(): string {
        return Mots.getMot(Mots._mot1)
    }
    static get mot2(): string {
        return Mots.getMot(Mots._mot2)
    }

}

function phrase():string {
    return Mots.mot1+' '+Mots.mot2
}