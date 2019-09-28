var access=require('../Utility/Functional_Utility')
var readsync= require ('readline-sync')
 
 var HarmonicInput=readsync.question("Enter the Harmonic value:  ")
 access.isHarmonic(HarmonicInput);