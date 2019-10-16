import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './input';
import { addTokimon } from '../services/tokimonService';

class AddTokimon extends Component {
  state = {
    tokimon: {
      trainer: '',
      name: '',
      weight: '',
      height: '',
      fly: '',
      fight: '',
      fire: '',
      water: '',
      electric: '',
      frozen: '',
    },
    errors: {},
  };

  schema = {
    trainer: Joi.string().required().label('Trainer'),
    name: Joi.string().required().label('Tokimon'),
    weight: Joi.number().required().label('Weight'),
    height: Joi.number().required().label('Height'),
    fly: Joi.number().required().label('Fly'),
    fight: Joi.number().required().label('Fight'),
    fire: Joi.number().required().label('Fire'),
    water: Joi.number().required().label('Water'),
    electric: Joi.number().required().label('Electric'),
    frozen: Joi.number().required().label('Frozen'),
  };

  validate = () => {
    const result = Joi.validate(this.state.tokimon, this.schema, { abortEarly: false });

    if (!result.error) return null;
    const errors = {};
    
    for(let item of result.error.details){
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  handleChange = e => {
    const tokimon = {...this.state.tokimon};
    tokimon[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ tokimon });
  };

  handleSubmit = async e => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    const { status } = await addTokimon(this.state.tokimon);

    if (status === 201) {
      alert('Tokimon Saved');
      const tokimon = {
      trainer: '',
      name: '',
      weight: '',
      height: '',
      fly: '',
      fight: '',
      fire: '',
      water: '',
      electric: '',
      frozen: '',
      }
      this.setState({ tokimon });
    }
    if (status !== 201) alert('Tokimon not Saved.\nPlease Try again later.');
  };

  render() { 
    const { trainer, name: tokimon, weight, height, fly, fight, fire, water, electric, frozen} = this.state.tokimon;
    const { errors } = this.state;
    return (
      <React.Fragment>
        <h1 className="addTokimon">Add Tokimon</h1>
        <div className="tokimonFormDiv">
          <form onSubmit={this.handleSubmit}>
            <Input
              label='Trainer'
              name='trainer'
              value={trainer}
              onChange={this.handleChange}
              type='text'
              error={errors.trainer}
            />
            <Input
              label='Tokimon'
              name='name'
              value={tokimon}
              onChange={this.handleChange}
              type='text'
              error={errors.name}
            />
            <Input
              label='Weight'
              name='weight'
              value={weight}
              onChange={this.handleChange}
              type='text'
              error={errors.weight}
            />            
            <Input
              label='Height'
              name='height'
              value={height}
              onChange={this.handleChange}
              type='text'
              error={errors.height}
            />            
            <Input
              label='Fly'
              name='fly'
              value={fly}
              onChange={this.handleChange}
              type='text'
              error={errors.fly}
            />          
            <Input
              label='Fight'
              name='fight'
              value={fight}
              onChange={this.handleChange}
              type='text'
              error={errors.fight}
            />
            <Input
              label='Fire'
              name='fire'
              value={fire}
              onChange={this.handleChange}
              type='text'
              error={errors.fire}
            />
            <Input
              label='Water'
              name='water'
              value={water}
              onChange={this.handleChange}
              type='text'
              error={errors.water}
            />
            <Input
              label='Electric'
              name='electric'
              value={electric}
              onChange={this.handleChange}
              type='text'
              error={errors.electric}
            />
            <Input
              label='Frozen'
              name='frozen'
              value={frozen}
              onChange={this.handleChange}
              type='text'
              error={errors.frozen}
            />
            <button 
              className="btn btn-primary btn-lg submitButton"
            >
              Submit
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
 
export default AddTokimon;