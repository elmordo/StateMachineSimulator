
function State(machine, internalId)
{
    this._active = false;
    this._machine = machine;
    this._internalId = internalId;
    this.name = internalId;
}

State.prototype.deactivate = function ()
{
    if (this._active)
    {
        this._active = false;
        this._machine.deactivateState();
    }
}

State.prototype.isActive = function()
{
    return this._active;
};

State.prototype.isFinal = function() {
    return this._machine.isFinalState(this);
};

State.prototype.getStateId = function()
{
    return this._internalId;
};

State.prototype.setActive = function()
{
    if (!this._active)
    {
        this._active = true;
        this._machine.setActiveState(this);
    }
}
