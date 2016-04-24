var React = require('../react');
var Editor = require('../Editor');
var CreateItemMixin = require('../types/CreateItemMixin');
var CollectionCreateTemplate = React.createClass({
    mixins: [CreateItemMixin],
    render(){
        return (<div className="panel panel-default">
            <div className="panel-heading">
                <h3 className={ 'panel-title clearfix '}>
                    {this.props.title}
                </h3>
            </div>
            <div className="panel-body" style={{paddingLeft: 30, paddingRight: 30}}>
                <div className="form-group">
                    <Editor ref="itemEditor" field={this.props.field} value={this.props.value}
                            valueManager={this.valueManager}
                            name={this.props.name}
                            pid={this.props.editPid}
                            form={null}
                            hideTitle={true} />
                </div>
                <div className="form-group">
                    <button className="btn btn-default pull-left" ref="cancelBtn" type="reset" onClick={this.props.onCancel}>Cancel
                    </button>
                    <button className="btn btn-primary pull-right" type="submit" ref='submitBtn'
                            onClick={this.handleSubmit}>{this.props.submitButton}</button>
                </div>
            </div>
        </div>);
    }
});
module.exports = CollectionCreateTemplate;

