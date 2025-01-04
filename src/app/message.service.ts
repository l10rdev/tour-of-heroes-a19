import {Injectable, signal, WritableSignal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: WritableSignal<string[]> = signal([]);

  add(message: string) {
    this.messages.update((value) => [...value, message])
  }

  clear() {
    this.messages.set([]) ;
  }
}
