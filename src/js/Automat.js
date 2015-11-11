
function Automat()
{
    this._states = [];
    this._tranzits = [];
    this._activeState = null;
    this._lastId = 0;
    this._finalStates = []
}

Automat.prototype.createState = function ()
{
    var state = new State(this, ++this._lastId);
    this._states.push(state);

    return state;
}

Automat.prototype.createTranzit = function(from, to, c)
{
    if (from.prototype === Number)
    {
        from = this.findById(from);
    }

    if (to.prototype === Number)
    {
        to = this.findById(to);
    }

    var tranzit = new Tranzit(from, to, c);
    this._tranzits.push(tranzit);

    return tranzit;

};

Automat.prototype.deactivateState = function ()
{
    if (this._activeState)
    {
        this._activeState.deactivate();
    }
}

Automat.prototype.findById = function(stateId)
{
    var state = null;

    for (var i in this._states)
    {
        if (this._states[i].getStateId() == stateId)
        {
            state = this._states[i];
            break;
        }
    }

    return state;
};

Automat.prototype.isInFinal = function() {
    var isOk = false;

    for (var i = 0; i < this._finalStates.length && !isOk; ++i)
    {
        isOk = this._finalStates[i] == this._activeState.getStateId();
    }

    return isOk;
};

Automat.prototype.isFinalState = function(state) {
    if (state instanceof State)
    {
        state = state.getStateId();
    }

    return this._finalStates.indexOf(state) != -1;
};

Automat.prototype.getStates = function()
{
    return this._states.slice();
};

Automat.prototype.setActiveState = function (state)
{
    if (this._activeState !== state)
    {
        this.deactivateState();
    }

    this._activeState = state;
    state.setActive();
}

Automat.prototype.setFinalStates = function(states) {
    this._finalStates = new Array();

    for (var i in states)
    {
        var state;

        if (states[i] instanceof State)
        {
            state = states[i].getStateId();
        }
        else
        {
            state = states[i];
        }

        this._finalStates.push(state);
    }
};

Automat.prototype.feed = function (c)
{
    var tranzits = this.findTranzits(this._activeState);

    for (var i in tranzits)
    {
        var tranzit = tranzits[i];

        if (tranzit.canTranzit(c))
        {
            tranzit.tranzit(c);
            this.setActiveState(tranzits[i].to);
            return;
        }
    }

    throw "No tranzit found";
}

Automat.prototype.findTranzits = function (state)
{
    var tranzits = new Array();

    for (var i in this._tranzits)
    {
        var tranzit = this._tranzits[i];

        if (tranzit.from.getStateId() == state.getStateId())
        {
            tranzits.push(tranzit)
        }
    }

    return tranzits;
}

