import AtomInterface from './AtomInterface';
import BaseBuilderInterface from './BaseBuilderInterface';

export default interface CustomBuilder extends BaseBuilderInterface {
  getInstance() : BaseBuilderInterface,
  _buildCustomUrl(template : string, atoms : Array<AtomInterface>) : CustomBuilder,
  getCustomUrl(template : string, atoms : Array<AtomInterface>) : string,
};
