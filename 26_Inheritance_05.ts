/*
    Inheritance

    http://cihanozhan.com
*/

class Figure
{
    constructor(protected Dimension:number)
    { }
}

class Square extends Figure {
    Area(): number {
        return this.Dimension * this.Dimension;
    }

    Perimeter(): number {
        return 4 * this.Dimension;
    }
}

class Circle extends Figure {
    Area(): number {
        return Math.PI * this.Dimension * this.Dimension;
    }

    Perimeter(): number {
        return 2 * Math.PI * this.Dimension;
    }
}

let fig:Figure = new Circle(20) // new Square()
alert(fig.Area())   // It's not allowed
alert(fig.Perimeter())