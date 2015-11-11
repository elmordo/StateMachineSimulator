
function AutomatRepresenter(automat) {
    this._automat = automat;

    this._states = new Array();
    this._edges = new Array();

    this.refreshStates();
}

AutomatRepresenter.prototype.getStateRepresenter = function()
{
    return this._states.slice();
};

AutomatRepresenter.prototype.refreshStates = function() {
    this._states = [];
    var states = this._automat.getStates();

    for (var i in states)
    {
        this._states.push(new StateRepresenter(states[i]));
    }
};

AutomatRepresenter.prototype.render = function(context)
{

};
