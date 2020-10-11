import BaseBuilderInterface from "./BaseBuilderInterface";

export default interface AtomInterface {
  [key : string ] : string | BaseBuilderInterface,
}
