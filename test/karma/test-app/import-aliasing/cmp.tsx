import {
  AttachInternals as ElInternals,
  Component as Cmp,
  Element as El,
  Event as RindoEvent,
  EventEmitter,
  h,
  Listen as RindoListen,
  Method as RindoMethod,
  Prop as Input,
  State as RindoState,
  Watch as RindoWatch,
} from '@rindo/core';

@Cmp({
  tag: 'import-aliasing',
  formAssociated: true,
})
export class FormAssociatedCmp {
  @Input() user: string;

  @RindoEvent() myEvent: EventEmitter<void>;

  @El() el!: HTMLElement;

  @ElInternals()
  internals: ElementInternals;

  @RindoState() changeCount = 0;
  @RindoState() methodCalledCount = 0;
  @RindoState() eventCaughtCount = 0;

  @RindoListen('myEvent')
  onMyEventTriggered() {
    this.eventCaughtCount += 1;
  }

  @RindoWatch('user')
  onNameChange() {
    this.changeCount += 1;
  }

  @RindoMethod()
  async myMethod() {
    this.methodCalledCount += 1;
    this.myEvent.emit();

    return this.el;
  }

  componentWillLoad() {
    this.internals.setFormValue('my default value');
  }

  render() {
    return [
      <p>My name is {this.user}</p>,
      <p>Name changed {this.changeCount} time(s)</p>,
      <p>Method called {this.methodCalledCount} time(s)</p>,
      <p>Event triggered {this.eventCaughtCount} time(s)</p>,
    ];
  }
}
