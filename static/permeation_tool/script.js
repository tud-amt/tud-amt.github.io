// * Project: Permeation Tool
// * Author: Feltin Joffrey
// * Date: August, 2023
// *
// * © 2023 Feltin Joffrey. All rights reserved.

// main.js or script.js


/* ###################### */
/* ## GLOBAL FUNCTIONS ## */
/* ###################### */
function showPage(page) {
    var pages = document.getElementsByClassName('page');
    for (var i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }
    document.getElementById(page).style.display = 'block';
}
function showSubmenus() {
    var submenus = document.getElementById("submenus");
    submenus.style.display = "block";
}
function hideSubmenus() {
    var submenus = document.getElementById("submenus");
    submenus.style.display = "none";
}
function showSubPage(subPage) {
    var subPages = document.getElementsByClassName('sub_page');
    for (var i = 0; i < subPages.length; i++) {
        subPages[i].style.display = 'none';
    }
    document.getElementById(subPage).style.display = 'block';
} 
let activeButton = null;
function setActiveButton(button) {
  if (activeButton) {
    activeButton.classList.remove('active');
  }
  
  activeButton = button;
  activeButton.classList.add('active');
}


/* ####################################### */
/* ## DICTIONNARY FOR UNITS CONVERSIONS ## */
/* ####################################### */
const R=8.313;
const LengthConversionsFactors = {
  "m": {
      "m" :1,
      "cm": 100,
      "mm": 1000,
      "um": 1000000,
      "in": 39.3701,
      "mil": 39370.1
  },
  "cm": {
      "cm": 1,
      "m": 0.01,
      "mm": 10,
      "um": 10000,
      "in": 0.393701,
      "mil": 39.3701
  },
  "mm": {
      "mm": 1,
      "m": 0.001,
      "cm": 0.1,
      "um": 1000,
      "in": 0.0393701,
      "mil": 3.93701
  },
  "um": {
      "um": 1,
      "m": 0.000001,
      "cm": 0.0001,
      "mm": 0.001,
      "in": 0.0000393701,
      "mil": 0.00393701
  },
  "in": {
      "in": 1,
      "m": 0.0254,
      "cm": 2.54,
      "mm": 25.4,
      "um": 25400,
      "mil": 1000
  },
  "mil": {
      "mil": 1,
      "m": 0.0000254,
      "cm": 0.00254,
      "mm": 0.0254,
      "um": 25.4,
      "in": 0.001
  }
}
const AreaConversionsFactors = {
  "m²": {
      "m²":1,
      "cm²": 10000,
      "mm²": 1000000,
      "100in²": 1550.0031
  },
  "cm²": {
      "cm²":1,
      "m²": 0.0001,
      "mm²": 100,
      "100in²": 0.15500031
  },
  "mm²": {
      "mm²":1,
      "m²": 0.000001,
      "cm²": 0.01,
      "100in²": 0.00015500031
  },
  "100in²": {
      "100in²":1,
      "m²": 0.00064516,
      "cm²": 6.4516,
      "mm²": 645.16
  }
}
const TimeConversionsFactor = {
  "s": {
      "s": 1,
      "min": 0.0166667,
      "h": 0.000277778,
      "d": 1.15741e-5
  },
  "min": {
      "min": 1,
      "s": 60,
      "h": 0.0166667,
      "d": 0.000694444
  },
  "h": {
      "h": 1,
      "s": 3600,
      "min": 60,
      "d": 0.0416667
  },
  "d": {
      "d": 1,
      "s": 86400,
      "min": 1440,
      "h": 24
  }
}
const PressureConversionsFactor = {
    "Pa": {
        "Pa": 1,
        "kPa": 0.001,
        "MPa": 1e-6,
        "psi": 0.000145038,
        "atm": 9.86923e-6,
        "bar": 1e-5,
        "mm/Hg": 0.00750062,
        "mPa": 1000,
        "mbar": 10
    },
    "kPa": {
        "kPa": 1,
        "Pa": 1000,
        "MPa": 0.001,
        "psi": 0.145038,
        "atm": 0.00986923,
        "bar": 0.01,
        "mm/Hg": 7.50062,
        "mPa": 1000000,
        "mbar": 10000
    },
    "MPa": {
        "Mpa": 1,
        "Pa": 1e+6,
        "kPa": 1000,
        "psi": 145.038,
        "atm": 9.86923,
        "bar": 10,
        "mm/Hg": 7500.62,
        "mPa": 1e+9,
        "mbar": 1e+7
    },
    "psi": {
        "psi": 1,
        "Pa": 6894.76,
        "kPa": 6.89476,
        "MPa": 0.00689476,
        "atm": 0.068046,
        "bar": 0.0689476,
        "mm/Hg": 51.7149,
        "mPa": 6894760,
        "mbar": 68947.6
    },
    "atm": {
        "atm": 1,
        "Pa": 101325,
        "kPa": 101.325,
        "MPa": 0.101325,
        "psi": 14.6959,
        "bar": 1.01325,
        "mm/Hg": 760,
        "mPa": 101325000,
        "mbar": 1013250
    },
    "bar": {
        "bar": 1,
        "Pa": 100000,
        "kPa": 100,
        "MPa": 0.1,
        "psi": 14.5038,
        "atm": 0.986923,
        "mm/Hg": 750.062,
        "mPa": 100000000,
        "mbar": 1000000
    },
    "mm/Hg": {
        "mm/Hg": 1,
        "Pa": 133.322,
        "kPa": 0.133322,
        "MPa": 1.33322e-4,
        "psi": 0.0193368,
        "atm": 0.00131579,
        "bar": 0.00133322,
        "mPa": 133322,
        "mbar": 1333.22
    },
    "mPa": {
        "mPa": 1,
        "Pa": 0.001,
        "kPa": 1e-6,
        "MPa": 1e-9,
        "psi": 1.45038e-7,
        "atm": 9.86923e-10,
        "bar": 1e-9,
        "mm/Hg": 7.50062e-7,
        "mbar": 0.01
    },
    "mbar": {
        "mbar": 1,
        "Pa": 0.1,
        "kPa": 0.0001,
        "MPa": 1e-7,
        "psi": 1.45038e-5,
        "atm": 9.86923e-8,
        "bar": 0.0001,
        "mm/Hg": 0.0750062,
        "mPa": 100
    }
} 
const VolumeConversionsFactor = {
  "m³":{
     "m³" : 1,
     "cm³" : 100*100*100,
     "L" : 1000
  },
  "cm³":{
      "cm³" : 1,
      "m³" : 1/(100*100*100),
      "L" : 1/1000
  },
  "L":{
      "L" : 1,
      "cm³" : 1000, 
      "m³": 1/1000,
  }
}
const TemperatureConversionsFactor = {
  "K": {
      "K": 1,
      "°C": -273.15,
  },
  "°C": {
      "°C": 1,
      "K": 273.15,
  }
}


/* #################################### */
/* ## FUNCTIONS FOR CONVERTING UNITS ## */
/* #################################### */
function convert_unit() {

    var Std_Temp = parseFloat(document.getElementById("Std_Temperature").value);
    var Std_Pressure = parseFloat(document.getElementById("Std_Pressure").value);
    var molar_weight = parseFloat(document.getElementById("MWt").value);
    molar_weight = molar_weight/1000 // (kg/mol)

    const MassConversionFactors = {
        "Kg": {
            "Kg": 1,
            "g": 1000,
            "moles": 1 / molar_weight,
            "m^3_{STP}": R*Std_Temp/(Std_Pressure*molar_weight),
            "cm³": (100*100*100)*R*Std_Temp/(Std_Pressure*molar_weight),
            "pound": 0.453592
        },
        "g": {
            "g": 1,
            "Kg": 1 / 1000,
            "moles": (1 / 1000) / molar_weight,
            "m³": 1 / 1000 * R*Std_Temp/(Std_Pressure*molar_weight),
            "cm³": 1/1000*(100*100*100) * R*Std_Temp/(Std_Pressure*molar_weight),
            "pound": (1 / 1000) * 0.453592
        },
        "moles": {
            "moles": 1,
            "Kg": molar_weight,
            "g": molar_weight * 1000,
            "m³": molar_weight * R*Std_Temp/(Std_Pressure*molar_weight),
            "cm³": molar_weight * (100*100*100) * R*Std_Temp/(Std_Pressure*molar_weight),
            "pound": molar_weight * 0.453592
        },
        "m³": {
            "m³": 1,
            "Kg": (Std_Pressure*molar_weight)/(R*Std_Temp),
            "g":  1000 * (Std_Pressure*molar_weight)/(R*Std_Temp),
            "moles": 1 / molar_weight,
            "cm³": (100*100*100),
            "pound": 0.453592
        },
        "cm³": {
            "cm³": 1,
            "Kg": 1/((100*100*100)*R*Std_Temp/(Std_Pressure*molar_weight)),
            "g": 1/(1/1000*(100*100*100) * R*Std_Temp/(Std_Pressure*molar_weight)),
            "moles": (1 / 1000) / molar_weight,
            "m³": 1 / (100*100*100),
            "pound": (1 / 1000) * 0.453592
        },
        "pound": {
            "pound": 1,
            "Kg": 1 / 0.453592,
            "g": (1 / 0.453592) * 1000,
            "moles": (1 / 0.453592) / molar_weight,
            "m³": 1 / 0.453592 * R*Std_Temp/(Std_Pressure*molar_weight),
            "cm³": (1 / 0.453592) * (100*100*100)*R*Std_Temp/(Std_Pressure*molar_weight)
        }
    };

    var From_value = document.getElementById("From_value").value;  // Valeur de l'input'
    var FromMass = document.getElementById("FromMass").value;  // Valeur sélectionnée dans l'option FromMass
    var ToMass = document.getElementById("ToMass").value;  // Valeur sélectionnée dans l'option ToMass
    var FromLength = document.getElementById("FromLength").value;  // Valeur sélectionnée dans l'option FromLength
    var ToLength = document.getElementById("ToLength").value;  // Valeur sélectionnée dans l'option ToLength
    var FromArea = document.getElementById("FromArea").value;  // Valeur sélectionnée dans l'option FromArea
    var ToArea = document.getElementById("ToArea").value;  // Valeur sélectionnée dans l'option ToArea
    var FromTime = document.getElementById("FromTime").value;  // Valeur sélectionnée dans l'option FromTime
    var ToTime = document.getElementById("ToTime").value;  // Valeur sélectionnée dans l'option ToTime
    var FromPressure = document.getElementById("FromPressure").value;  // Valeur sélectionnée dans l'option FromPressure
    var ToPressure = document.getElementById("ToPressure").value;  // Valeur sélectionnée dans l'option ToPressure
  
    console.log(From_value, FromMass, ToMass, FromLength, ToLength, FromArea, ToArea, FromTime, ToTime, FromPressure, ToPressure);
    const Mass_factor = MassConversionFactors[FromMass][ToMass];
    const Length_factor = LengthConversionsFactors[FromLength][ToLength];
    const Area_factor = AreaConversionsFactors[FromArea][ToArea];
    const Time_factor = TimeConversionsFactor[FromTime][ToTime];
    const Pressure_factor = PressureConversionsFactor[FromPressure][ToPressure];
    console.log(FromMass);

    const result = From_value * Mass_factor *Length_factor /(Area_factor*Time_factor*Pressure_factor);
    document.getElementById("To_Value").value = result;
    
    var FromMassDisplay = FromMass;
    var ToMassDisplay = ToMass;


    if (FromMassDisplay ==  "m³") {
      FromMassDisplay = "m^{3}_{STP}";
    }
    if (FromMassDisplay ==  "cm³") {
      FromMassDisplay = "cm^{3}_{STP}";
    }

    if (ToMassDisplay ==  "m³") {
      ToMassDisplay = "m^{3}_{STP}";
    }
    if (ToMassDisplay ==  "cm³") {
      ToMassDisplay = "cm^{3}_{STP}";
    }

    function PowerOfTenDisplay(number) {
      var [coefficient, exponent] = number.split("e");
      console.log(coefficient, exponent);
      if (exponent[0]=="+") {
        exponent = exponent.substring(1);
        if (exponent[0]=="0") {
          return `${coefficient}`;
        }
        else {
          return `${coefficient} \\cdot  10^{${exponent}}`;
        }
      }
      if (exponent[0]=="-") {
        return `${coefficient} \\cdot  10^{${exponent}}`;
      }
      else {
        return 'undefined';
      }
    }
    

    // Displaying selected items in LaTeX as fractions
    document.getElementById("selectedFromUnits").innerHTML = '<span class="tex2jax_process">\\(\\ ' + PowerOfTenDisplay(Number(From_value).toExponential(2)) + ' \\, \\dfrac{' + FromMassDisplay + ' \\cdot ' + FromLength + '}{' + FromArea + ' \\cdot ' + FromTime + ' \\cdot ' + FromPressure + '}\\)</span>'; 
    document.getElementById("selectedToUnits").innerHTML = '<span class="tex2jax_process">\\(\\ ' + PowerOfTenDisplay(result.toExponential(2)) + '\\, \\dfrac{' + ToMassDisplay + ' \\cdot ' + ToLength + '}{' + ToArea + ' \\cdot ' + ToTime + ' \\cdot ' + ToPressure + '}\\)</span>';
    MathJax.typeset();
}
convert_unit()


/* ##################################################################### */
/* ## FUNCTION TO AUTOSELCT THE STANDARDS UNITS ON THE UNIT CONVERTER ## */
/* ##################################################################### */  
function autoselectUnits() {
    document.getElementById("ToMass").value = "cm³";  
    document.getElementById("ToLength").value = "cm"; 
    document.getElementById("ToArea").value = "cm²";
    document.getElementById("ToTime").value = "s"; 
    document.getElementById("ToPressure").value = "bar";
    convert_unit();
}


/* ################################################################## */
/* ## FUNCTIONS TO DETERMINE PERMEATION COEFFICIENT (PERMEABILITY) ## */
/* ## FROM EXPERIMENTAL MEASURE                                    ## */
/* ################################################################## */
function Pressure_Determine_Permeation() {
    var Leak_rate = document.getElementById("Pressure_LeakRateValue").value;  
    var Leak_rate_Unit = document.getElementById("Pressure_LeakRateUnit").value;  
    
    var Thickness = document.getElementById("Pressure_ThicknessValue").value;
    var Thickness_Unit = document.getElementById("Pressure_ThicknessUnit").value;
    
    var Area = document.getElementById("Pressure_AreaValue").value;
    var Area_Unit = document.getElementById("Pressure_AreaUnit").value;
    var P_Left_Tank = document.getElementById("Pressure_LetftTankPressureValue").value;
    var P_Left_Tank_Unit = document.getElementById("Pressure_LetftTankPressureUnit").value;
    
    var P_Right_Tank = document.getElementById("Pressure_RightTankPressureValue").value;
    var P_Right_Tank_Unit = document.getElementById("Pressure_RightTankPressureUnit").value;
    var Tank_Volume = document.getElementById("Pressure_TankVolumeValue").value;
    var Tank_Volume_Unit = document.getElementById("Pressure_TankVolumeUnit").value;
    var Temperature = document.getElementById("Pressure_TemperatureValue").value;
    var Temperature_Unit = document.getElementById("Pressure_TemperatureUnit").value;
    console.log(Leak_rate, Leak_rate_Unit, Thickness, Thickness_Unit, Area, Area_Unit,P_Left_Tank,P_Left_Tank_Unit,P_Right_Tank,P_Right_Tank_Unit,Tank_Volume,Tank_Volume_Unit,Temperature,Temperature_Unit);
    Leak_rate_Unit = Leak_rate_Unit.slice(0,-2);
    console.log(Leak_rate_Unit);
    const Leak_rate_pressure_factor = PressureConversionsFactor[Leak_rate_Unit]["Pa"];
    const Thickness_factor = LengthConversionsFactors[Thickness_Unit]["m"];
    const Area_factor = AreaConversionsFactors[Area_Unit]["m²"];
    const LeftTank_Pressure_factor = PressureConversionsFactor[P_Left_Tank_Unit]["Pa"];
    const RightTank_Pressure_factor = PressureConversionsFactor[P_Right_Tank_Unit]["Pa"];
    const Volume_factor = VolumeConversionsFactor[Tank_Volume_Unit]["m³"];
    const Temperature_factor = TemperatureConversionsFactor[Temperature_Unit]["K"];
    
    console.log(Leak_rate_pressure_factor,Thickness_factor,Area_factor,LeftTank_Pressure_factor,RightTank_Pressure_factor,Volume_factor,Temperature_factor);
    
    /*
    (𝑚𝑜𝑙∙𝑚)/(〖𝑠∙𝑚〗^2∙𝑃𝑎)
    */
    const Permeation = Leak_rate * Leak_rate_pressure_factor * Tank_Volume * Volume_factor /(R * Temperature * Temperature_factor) * Thickness * Thickness_factor / (Area * Area_factor * (P_Left_Tank*LeftTank_Pressure_factor - P_Right_Tank*RightTank_Pressure_factor));
    document.getElementById("Permeation").value = Permeation;
}
Pressure_Determine_Permeation();

function Mass_Determine_Permeation() {
    var Leak_rate = document.getElementById("Mass_LeakRateValue").value;  
    var Leak_rate_Unit = document.getElementById("Mass_LeakRateUnit").value;  
    
    var Molar_Weight = document.getElementById("Mass_MolarWeight").value; // in g/mol

    const ConcentrationConversionsFactors = {     //1ppm =1mL/m^3 =1mg/kg =1g/T
      "mol/L": {
        "mol/L": 1,
        "mmol/L": 1000,
        "μmol/L": 1000000,
        "µg/L" : Molar_Weight / 1000000,
        "mg/L": Molar_Weight / 1000,
        "g/L": Molar_Weight,
        "mol/m³": 1000,
        "mmol/m³": 1000000,
        "μmol/m³": 1000000000,
        "ppm": Molar_Weight * 1000,
      },
      "mmol/L": {
        "mol/L": 0.001,
        "mmol/L": 1,
        "μmol/L": 1000,
        "µg/L": (Molar_Weight / 1000000) * 0.001,
        "mg/L": (Molar_Weight / 1000) * 0.001,
        "g/L": Molar_Weight * 0.001,
        "mol/m³": 1,
        "mmol/m³": 1000,
        "μmol/m³": 1000000,
        "ppm": Molar_Weight,
      },
      "μmol/L": {
        "mol/L": 0.000001,
        "mmol/L": 0.001,
        "μmol/L": 1,
        "µg/L": Molar_Weight / 1000000,
        "mg/L": Molar_Weight / 1000,
        "g/L": Molar_Weight * 0.000001,
        "mol/m³": 0.001,
        "mmol/m³": 1,
        "μmol/m³": 1000,
        "ppm": Molar_Weight * 0.001,
      },
      "µg/L": {
        "mol/L": Molar_Weight / 1000000,
        "mmol/L": (Molar_Weight / 1000000) * 0.001,
        "μmol/L": Molar_Weight / 1000000,
        "µg/L": 1,
        "mg/L": 0.001,
        "g/L": Molar_Weight / 1000000,
        "mol/m³": Molar_Weight / 1000,
        "mmol/m³": (Molar_Weight / 1000) * 0.001,
        "μmol/m³": Molar_Weight / 1000,
        "ppm": 1,
      },
      "mg/L": {
        "mol/L": Molar_Weight / 1000,
        "mmol/L": (Molar_Weight / 1000) * 0.001,
        "μmol/L": Molar_Weight / 1000,
        "µg/L": 1000,
        "mg/L": 1,
        "g/L": Molar_Weight / 1000,
        "mol/m³": Molar_Weight,
        "mmol/m³": Molar_Weight * 0.001,
        "μmol/m³": Molar_Weight,
        "ppm": 1000,
      },
      "g/L": {
        "mol/L": Molar_Weight,
        "mmol/L": Molar_Weight * 0.001,
        "μmol/L": Molar_Weight,
        "µg/L": Molar_Weight * 1000000,
        "mg/L": Molar_Weight * 1000,
        "g/L": 1,
        "mol/m³": Molar_Weight * 1000,
        "mmol/m³": Molar_Weight * 1000000,
        "μmol/m³": Molar_Weight * 1000000000,
        "ppm": Molar_Weight * 1000000,
      },
      "mol/m³": {
        "mol/L": 0.001,
        "mmol/L": 1,
        "μmol/L": 1000,
        "µg/L": (Molar_Weight / 1000000) * 0.001,
        "mg/L": (Molar_Weight / 1000) * 0.001,
        "g/L": Molar_Weight * 0.001,
        "mol/m³": 1,
        "mmol/m³": 1000,
        "μmol/m³": 1000000,
        "ppm": Molar_Weight,
      },
      "mmol/m³": {
        "mol/L": 0.000001,
        "mmol/L": 0.001,
        "μmol/L": 1,
        "µg/L": Molar_Weight / 1000000,
        "mg/L": Molar_Weight / 1000,
        "g/L": Molar_Weight * 0.000001,
        "mol/m³": 0.001,
        "mmol/m³": 1,
        "μmol/m³": 1000,
        "ppm": Molar_Weight * 0.001,
      },
      "μmol/m³": {
        "mol/L": 0.000000001,
        "mmol/L": 0.000001,
        "μmol/L": 0.001,
        "µg/L": Molar_Weight / 1000000,
        "mg/L": Molar_Weight / 1000,
        "g/L": Molar_Weight * 0.000000001,
        "mol/m³": 0.000001,
        "mmol/m³": 0.001,
        "μmol/m³": 1,
        "ppm": Molar_Weight * 0.000001,
      },
      "ppm": {
        "mol/L": Molar_Weight / 1000,
        "mmol/L": (Molar_Weight / 1000) * 0.001,
        "μmol/L": Molar_Weight / 1000,
        "µg/L": 1000,
        "mg/L": 1,
        "g/L": Molar_Weight / 1000,
        "mol/m³": Molar_Weight,
        "mmol/m³": Molar_Weight * 0.001,
        "μmol/m³": Molar_Weight,
        "ppm": 1,
      },
    };
    
    var Thickness = document.getElementById("Mass_ThicknessValue").value;
    var Thickness_Unit = document.getElementById("Mass_ThicknessUnit").value;
    
    var Area = document.getElementById("Mass_AreaValue").value;
    var Area_Unit = document.getElementById("Mass_AreaUnit").value;
    
    var P_Left_Tank = document.getElementById("Mass_LetftTankPressureValue").value;
    var P_Left_Tank_Unit = document.getElementById("Mass_LetftTankPressureUnit").value;
    
    var P_Right_Tank = document.getElementById("Mass_RightTankPressureValue").value;
    var P_Right_Tank_Unit = document.getElementById("Mass_RightTankPressureUnit").value;

    var Tank_Volume = document.getElementById("Mass_TankVolumeValue").value;
    var Tank_Volume_Unit = document.getElementById("Mass_TankVolumeUnit").value;
    
    //console.log(Leak_rate, Leak_rate_Unit, Thickness, Thickness_Unit, Area, Area_Unit,P_Left_Tank,P_Left_Tank_Unit,P_Right_Tank,P_Right_Tank_Unit,Tank_Volume,Tank_Volume_Unit,Temperature,Temperature_Unit);
    //console.log(Leak_rate_Unit);
    const Concentration_factor = ConcentrationConversionsFactors[Leak_rate_Unit]["mol/m³"];
    const Thickness_factor = LengthConversionsFactors[Thickness_Unit]["m"];
    const Area_factor = AreaConversionsFactors[Area_Unit]["m²"];
    const LeftTank_Pressure_factor = PressureConversionsFactor[P_Left_Tank_Unit]["Pa"];
    const RightTank_Pressure_factor = PressureConversionsFactor[P_Right_Tank_Unit]["Pa"];
    const Volume_factor = VolumeConversionsFactor[Tank_Volume_Unit]["m³"];
    
    console.log(Concentration_factor,Thickness_factor,Area_factor,LeftTank_Pressure_factor,RightTank_Pressure_factor,Volume_factor);
    
    /*
    (𝑚𝑜𝑙∙𝑚)/(〖𝑠∙𝑚〗^2∙𝑃𝑎)
    */
    const Permeation = Leak_rate * Concentration_factor * Tank_Volume * Volume_factor * Thickness * Thickness_factor / (Area * Area_factor * (P_Left_Tank*LeftTank_Pressure_factor - P_Right_Tank*RightTank_Pressure_factor));
    document.getElementById("Permeation_mass").value = Permeation;
}
Mass_Determine_Permeation();

/* ########################## */
/* ## INTERACTIVES GRAPHS  ## */
/* ########################## */
/* Fick law curve */
document.addEventListener('DOMContentLoaded', function () {
    const chartCanvas = document.getElementById('chartCanvas');
    const DInput = document.getElementById('D');
    const xInput = document.getElementById('x');
    const CInput = document.getElementById('C');
    const tInput = document.getElementById('t');
    const numPointsInput = document.getElementById('numPoints');
    const DValueInput = document.getElementById('DValue');
    const xValueInput = document.getElementById('xValue');
    const CValueInput = document.getElementById('CValue');
    const tValueInput = document.getElementById('tValue');
    const numPointsValueInput = document.getElementById('numPointsValue');

    // Chart configuration
    const chartConfig = {
        type: 'line',
        data: {
          labels: [],
          datasets: [{
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2,
            data: [],
            fill: 'start'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              title: {
                display: true,
                text: 'Time [s]'
              },
              ticks: {
                callback: function (value, index, values) {
                  const tValue = parseFloat(tValueInput.value);
                  const numPointsValue = parseInt(numPointsValueInput.value);
                  const timeStep = tValue / (numPointsValue - 1);
                  return (index * timeStep).toFixed(0);
                }
              }
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Flux J [mol/m²/s]'
              },
              ticks: {
                callback: function (value, index, values) {
                  return value.toExponential(1);
                }
              }
            }
          },
          plugins: {
            legend: {
              display: false
            }
          }
        }
      }; 
      
    // Create chart
    const myChart = new Chart(chartCanvas, chartConfig);

    // Function to calculate J values based on the given equation
    function calculateJ(D, C, t, l) {
      if (t === 0) return 0; // J(0) should be 0

      const numTerms = 100; // Number of terms in the truncated sum
      const piSquared = Math.PI * Math.PI;
      let J = 1; // First term of the sum

      for (let n = 1; n <= numTerms; n++) {
        const term = ((-1) ** n) * Math.exp((-D * n * n * piSquared * t) / (l * l));
        J += 2 * term;
      }

      J *= D * C/l;

      return J;
    }

    // Function to update chart data and redraw
    function updateChart() {
      const DValue = parseFloat(DValueInput.value);
      const xValue = parseFloat(xValueInput.value);
      const CValue = parseFloat(CValueInput.value);
      const tValue = parseFloat(tValueInput.value);
      const numPointsValue = parseInt(numPointsValueInput.value);

      const JValues = [];
      const timeStep = tValue / (numPointsValue - 1);

      for (let time = 0; time <= tValue; time += timeStep) {
        const J = calculateJ(DValue, CValue, time, xValue);
        JValues.push(J);
      }

      myChart.data.labels = Array.from({ length: numPointsValue }, (_, index) => (index * timeStep).toFixed(0));
      myChart.data.datasets[0].data = JValues;
      myChart.options.scales.y.min = Math.min(...JValues) * 0.9;
      myChart.options.scales.y.max = Math.max(...JValues) * 1.1;
      myChart.update();
    }

    // Add event listeners to the input sliders
    DInput.addEventListener('input', function() {
      const DValue = parseFloat(DInput.value);
      DValueInput.value = DValue.toExponential(1);
      updateChart();
    });

    xInput.addEventListener('input', function() {
      const xValue = parseFloat(xInput.value);
      xValueInput.value = xValue.toFixed(3);
      updateChart();
    });

    CInput.addEventListener('input', function() {
      const CValue = parseFloat(CInput.value);
      CValueInput.value = CValue.toFixed(0);
      updateChart();
    });

    tInput.addEventListener('input', function() {
      const tValue = parseFloat(tInput.value);
      tValueInput.value = tValue.toFixed(0);
      updateChart();
    });

    numPointsInput.addEventListener('input', function() {
      const numPointsValue = parseInt(numPointsInput.value);
      numPointsValueInput.value = numPointsValue.toFixed(0);
      updateChart();
    });

    // Add event listeners to the text inputs
    DValueInput.addEventListener('input', function() {
      const DValue = parseFloat(DValueInput.value);
      DInput.value = DValue.toExponential(1);
      updateChart();
    });

    xValueInput.addEventListener('input', function() {
      const xValue = parseFloat(xValueInput.value);
      xInput.value = xValue.toFixed(3);
      updateChart();
    });

    CValueInput.addEventListener('input', function() {
      const CValue = parseFloat(CValueInput.value);
      CInput.value = CValue.toFixed(0);
      updateChart();
    });

    tValueInput.addEventListener('input', function() {
      const tValue = parseFloat(tValueInput.value);
      tInput.value = tValue.toFixed(0);
      updateChart();
    });

    numPointsValueInput.addEventListener('input', function() {
      const numPointsValue = parseInt(numPointsValueInput.value);
      numPointsInput.value = numPointsValue.toFixed(0);
      updateChart();
    });

    // Initial chart render
    updateChart();
});
/* Knudsen curve */
document.addEventListener('DOMContentLoaded', function () {
  const KnudTInput = document.getElementById('KnudT');
  const KnudTValueInput = document.getElementById('KnudTValue');

  const KnudPInput = document.getElementById('KnudP');
  const KnudPValueInput = document.getElementById('KnudPValue');

  const p_constant_bar = [4, 500, 700];
  const T_var_Celcius = [-250, -220, 20];
  const p_constant_pascal = p_constant_bar.map(bar => bar * 1e5);
  const T_var_Kelvin = T_var_Celcius.map(C => C + 273.15);

  function calculateMeanFreePath(T, p) {
    const kb = 1.380649e-23;
    const M = 2.016;
    const Na = 6.022e26;
    const dm = 297e-12;
    const R = 8314;

    const mu = (2 / (3 * Math.sqrt(Math.PI))) * (Math.sqrt(M * R * T) / (Math.PI * Na * dm ** 2));
    const lambda = (mu / p) * Math.sqrt(Math.PI / 2) * (Math.sqrt(R * T / M));

    //console.log(lambda);
    return lambda; // Convert to nm
  }

  const char_length_microm = [0.1, 0.7, 1, 10, 100, 1000];
  const char_length_m = char_length_microm.map(μm => μm * 1e-6);
  const knudsen = [];

  const Knudctx = document.getElementById("KnudChart").getContext("2d");

  const labels = char_length_microm.map(String);

  const Knudconfig = {
    type: "line",
    data: {
      labels: labels,
      datasets: [{
          backgroundColor: '#00000000',
          borderColor: 'black',
          borderWidth: 3,
          data: [],
          fill: 'start',
          radius :0
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      scales: {
        x: {
          type: 'logarithmic',
          title: {
            display: true,
            text: "Characteristic Length Dimension of the crack (μm)",
            font: {
              family: "Arial", // Changer la police ici
              size: 26 // Changer la taille de la police ici
            }
          }
        },
        y: {
          type: 'logarithmic',
          title: {
            display: true,
            text: "Knudsen Number",
            font: {
              family: "Arial", // Changer la police ici
              size: 26 // Changer la taille de la police ici
            }
          },
          ticks: {
            callback: function (value, index, values) {
              if (value === 1e-14 || value === 1e-13 || value === 1e-12 || value === 1e-11 || value === 1e-10 || value === 1e-9 || value === 1e-8 || value === 1e-7 || value === 1e-6 || value === 1e-5 || value === 1e-4 || value === 1e-3 || value === 1e-2 || value === 1e-1 || value === 1 || value === 1e+1 || value === 1e+2) {
                // return value.toExponential();
                return `10^${Math.log10(value)}`
              }
            }
          }
        }
      },
      plugins: {
        annotation: {
          common: {
            drawTime: 'beforeDraw'
          },
          annotations: {
            box1: {
              type: 'box',
              xMin: 0,
              xMax: 1000.0,
              yMin: 0.1,
              yMax: 10,
              backgroundColor: '#D9F0F670',
              borderWidth : 0,
              label: {
                drawTime: 'afterDraw',
                content: '0.1 < Kn < 10 : Knudsen Flow',
                display: true,
                z :2,
                font: {size: 28},
                color : 'white',
                textStrokeColor : 'black',
                textStrokeWidth : 4
              }
            },
            box2: {
              type: 'box',
              xMin: 0,
              xMax: 1000.0,
              yMin: 0.001,
              yMax: 0.1,
              backgroundColor: '#6EBBD570',
              borderWidth : 0,
              label: {
                drawTime: 'afterDraw',
                content: '0.001 < Kn < 0.1 : Slip Flow', 
                display: true,
                z :2,
                font: {size: 28},
                color : 'white',
                textStrokeColor : 'black',
                textStrokeWidth : 4
              }
            },
            box3: {
              type: 'box',
              xMin: 0,
              xMax: 1000.0,
              yMin: 0,
              yMax: 0.001,
              backgroundColor: '#00A6D670',
              borderWidth : 0,
              label: {
                drawTime: 'afterDraw',
                content: 'Kn < 0.001 : Continuum/Darcy Flow', 
                display: true,
                font: {size: 28},
                color : 'white',
                textStrokeColor : 'black',
                textStrokeWidth : 4
              }
            }
          }
        },
        legend: {
          display : false
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              const datasetLabel = context.dataset.label || '';
              const xLabel = context.label;
              const yLabel = context.parsed.y.toExponential(3);

              return `${datasetLabel}: x: ${xLabel}, y: ${yLabel}`;
            }
          }
        }
      }
    }
  };

  const KnudChart= new Chart(Knudctx, Knudconfig);

  function updateKnudChart(){
    const KnudTValue = parseFloat(KnudTValueInput.value);
    const KnudPValue = parseFloat(KnudPValueInput.value) * 1e5;

    const KnudsenValues=[];

    for (let j = 0; j < char_length_microm.length; j++) {
      const knud = calculateMeanFreePath(KnudTValue, KnudPValue) / char_length_m[j];
      KnudsenValues.push(knud);
      console.log(KnudsenValues);
    }
    KnudChart.data.datasets[0].data = KnudsenValues;
    //KnudChart.options.scales.y.min =1e-12;
    KnudChart.options.scales.y.max =10;
    KnudChart.options.scales.y.min = Math.min(...KnudsenValues) * 0.9;
    KnudChart.options.scales.x.min =0.1;

    // KnudChart.options.scales.y.max = Math.max(...KnudsenValues) * 1.1;
    KnudChart.update();
  }

  KnudTInput.addEventListener('input', function() {
    const KnudTvalue = parseFloat(KnudTInput.value);
    KnudTValueInput.value = KnudTvalue.toFixed(1);
    updateKnudChart();
  })
  KnudTValueInput.addEventListener('input', function() {
    const KnudTvalue = parseFloat(KnudTValueInput.value);
    KnudTInput.value = KnudTvalue.toFixed(1);
    updateKnudChart();
  })

  KnudPInput.addEventListener('input', function() {
    const KnudPvalue = parseFloat(KnudPInput.value);
    KnudPValueInput.value = KnudPvalue.toFixed(0);
    updateKnudChart();
  })
  KnudPValueInput.addEventListener('input', function() {
    const KnudPvalue = parseFloat(KnudPValueInput.value);
    KnudPInput.value = KnudPvalue.toFixed(0);
    updateKnudChart();
  })

  updateKnudChart();
})
