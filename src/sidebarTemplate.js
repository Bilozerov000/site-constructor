export function block (type){
    return `
        <form name="${type}">
            <h5>${type}</h5>
            <div class="form-group">
                <input class="form-control form-control-sm" name="value" placeholder="value">
            </div>
            <br>
             <div class="form-group">
                <input class="form-control form-control-sm" name="options" placeholder="options">
            </div>
            <br>              
            <div class="form-group">
                <input class="form-control form-control-sm" name="styles" placeholder="styles">
            </div>
            <br>           
            <button type="submit" class="btn btn-primary btn-sm">Add</button>
        </form>
        <hr />
    `
}
