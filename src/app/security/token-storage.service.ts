import SecureLS from 'secure-ls';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  private ls = new SecureLS({encodingType: 'aes'});

  setItem(key: string, value: string) {
    this.ls.set(key, value);
  }

  getItem(key: string): string | null {
    return this.ls.get(key);
  }

  removeItem(key: string): void {
    this.ls.remove(key);
  }
}
