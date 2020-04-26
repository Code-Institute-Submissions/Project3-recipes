
$(function(){

    document.getElementById("add-step").addEventListener("click", addStep)

    // document.getElementById("minus-step").addEventListener("click", minusStep)


})

function addStep() {

    NumExistingSteps = document.getElementById("steps-rows").childElementCount

    let stepElement = document.createElement('div')

    // stepElement.setAttribute("class","form-group row")
    stepElement.innerHTML = `
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label"> <b>STEP ${NumExistingSteps+1}</b> </label>
                    <div class="col-sm-10">
                        <input class="form-control" type="text" name="step-${NumExistingSteps}" value="" />
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label"> Ingredients for Step ${NumExistingSteps+1} </label>
                    <div class="col-sm-10">
                        <input class="form-control" type="text" name="ing-${NumExistingSteps}" value="" />
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label"> Tools for step ${NumExistingSteps+1}  </label>
                    <div class="col-sm-10">
                        <input class="form-control" type="text" name="tools-${NumExistingSteps}" value="" />
                    </div>
                </div>`

    document.getElementById("steps-rows").appendChild(stepElement)



}

