
const METER_FEET = 3.28084;
const FATHOM_FEET = 6.0761;

class Unit {
    static to = (unit:string, value:number) => {
        const fn = this['to_'+unit];
        console.log(this, fn);
        return fn?.(value)
    }
}

class Celsius extends Unit {
    static to = (unit: string, value:number) => {
        if (this['to_'+unit] === undefined) return false;
        return this['to_'+unit](value);
    }
    
    static to_farenheit = (temp: number) => (temp * (9/5) + 32);
}

class Farenheit extends Unit {
    static to = (unit:string, value:number) => {
        if (this['to_'+unit] === undefined) return false;
        return this['to_'+unit](value);
    }
    static to_celsius = (temp:number) => (temp - 32) * (5 / 9);
}

class Barley extends Unit {
    static to = (unit:string, value:number) => this['to_'+unit](value);
    static to_inches = (value:number) => value / 3;
    static to_feet = (value:number) => this.to_inches(value) / 12;
    static to_meter = (value:number) => this.to_feet(value) * METER_FEET;
    static to_yards = (value:number) => this.to_feet(value) / 3;
    static to_fathom = (value:number) => this.to_feet(value) / FATHOM_FEET;
}

class Inches extends Unit {
    static to = (unit:string, value:number) => this['to_'+unit](value);
    static to_feet = (value:number) => value / 12;
    static to_meter = (value:number) => this.to_feet(value) * METER_FEET;
    static to_bc = (value:number) => value * 3;
    static to_yards = (value:number) => this.to_feet(value) / 3;
    static to_fathom = (value: number) => this.to_feet(value) / FATHOM_FEET;
}

class Feet extends Unit {
    static to = (unit:string, value:number) => this['to_'+unit](value);
    static to_inches = (value:number) => value * 12;
    static to_meter = (value:number) => value * METER_FEET;
    static to_bc = (value:number) => this.to_inches(value) * 3;
    static to_yards = (value:number) => value / 3;
    static to_fathom = (value:number) => value / FATHOM_FEET;
}

class Meter extends Unit {
    static to = (unit:string, value:number) => this['to_'+unit](value);
    static to_inches = (value:number) => this.to_feet(value) * 12;
    static to_feet = (value:number) => value / METER_FEET;
    static to_bc = (value:number) => this.to_inches(value) * 3;
    static to_yards = (value:number) => this.to_feet(value) / 3;
    static to_fathom = (value:number) => this.to_feet(value) / FATHOM_FEET;
}

class Yards extends Unit {
    static to = (unit:string, value:number) => this['to_'+unit](value);
    static to_feet = (value:number) => value * 3;
    static to_inches = (value:number) => this.to_feet(value) * 12;
    static to_bc = (value:number) => this.to_inches(value) * 3;
    static to_meter = (value:number) => this.to_feet(value) * METER_FEET;
    static to_fathom = (value:number) => this.to_feet(value) / FATHOM_FEET;
}

class Fathom extends Unit {
    static to = (unit:string, value:number) => this['to_'+unit](value);
    static to_inches = (value:number) => this.to_feet(value) * 12;
    static to_feet = (value:number) => value * FATHOM_FEET;
    static to_bc = (value:number) => this.to_inches(value) * 3;
    static to_meter = (value:number) => this.to_feet(value) * METER_FEET;
    static to_yards = (value:number) => this.to_feet(value) / 3;
}


const MILES_KNOTS = 1.151;
const MILES_KPH = 1.609;

class Miles extends Unit {
    static to = (unit: string, value:number) => this['to_' + unit](value);
    static to_knots = (value:number) => value / MILES_KNOTS
    static to_kph = (value:number) => value * MILES_KPH;
}

class Knots extends Unit {
    static to = (unit: string, value: number) => this['to_'+unit](value);
    static to_mph = (value: number) => value * MILES_KNOTS
    static to_kph = (value: number) => this.to_mph(value) / MILES_KPH;
}

class KPH extends Unit {
    static to = (unit: string, value:number) => this['to_'+unit](value);
    static to_mph = (value:number) => value / MILES_KPH;
    static to_knots = (value:number) => this.to_mph(value) * MILES_KNOTS;
}

export default {
    ...Unit,
    KPH,
    Knots,
    Miles,
    Inches,
    Barley,
    Meter,
    Feet,
    Yards,
    Fathom,
    Farenheit,
    Celsius,
    fix: (value:number, len?:number) => value.toFixed(len ?? 2),
    isWhole: (value: number) => (''+value).length === value.toFixed(0).length
}