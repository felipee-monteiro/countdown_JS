const countdownContainer = document.querySelector("[data-js='countdown-items']");
const countdownInputValue = document.querySelector(".countdown-items");
const button = document.querySelector(".btn-init");

button.onclick = () => {

	countdownContainer.innerHTML = "";

	const formatUnit = (unit, unitToConvert = null) => {

    	if (unitToConvert === null) unitToConvert = 1;
        return unit - unitToConvert;
    
    }

	const {value:countdownValue} = countdownInputValue;
	const present = new Date();
	const getFullYearDate = present.getFullYear();
	const getMonthDate = present.getMonth();
	const getDayDate = present.getDate();
	const getHoursDate = present.getHours();
	const getMInutesDate = present.getMinutes();
	const getSecondsDate = present.getSeconds();
    const countdownValueDate = {
         year: Number(countdownValue.substring(0,4)),
         month: Number(countdownValue.substring(5,7)),
         day: Number(countdownValue.substring(8,10))
    }
    const {year, month, day} = countdownValueDate;
    const finalDay = formatUnit(day, getDayDate);
    const finalMonth = formatUnit(month, getMonthDate);
    const finalYear = formatUnit(year, getFullYearDate);
    let finalHours = formatUnit(24, getHoursDate);
    let finalMinutes = formatUnit(60, getMInutesDate);
    let finalSeconds = formatUnit(60, getSecondsDate) - 1;

	if (countdownValue.trim() === "" || year < getFullYearDate) {
		alert("Por favor digite uma data válida."); 
		return;
	}
    
    const insertUnitsIntoPageAndUpdateValues = () => {
    	finalSeconds -= 1;
        
        if (finalSeconds === 0) {
        	finalSeconds = 59;
            finalMinutes -= 1;      
        }

        if (finalHours === 0) finalHours -= 1;

        countdownContainer.innerHTML = `Faltam ${finalYear} anos, ${finalMonth} meses, ${finalDay} dias, ${finalHours} horas, ${finalMinutes} minutos e ${finalSeconds} segundos`;
    }; 

    setInterval(insertUnitsIntoPageAndUpdateValues, 1000);
}