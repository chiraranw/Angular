import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: "txt_formatter" })
export class TitleCase implements PipeTransform {
    transform(value: string) {
        if (!value) return null;

        let words = value.split(' ');
        for (var i = 0; i < words.length; i++) {
            let word = words[i];
            if (i > 0 && this.isPreposition(word))
                words[i] = word.toLowerCase();
            else
                words[i] = this.toTitleCase(word);
        }

        return words.join(' ');
    }

    private toTitleCase(word: string): string {
        return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
    }

    private isPreposition(word: string): boolean {
        let prepositions = [
            'of',
            'the'
        ];

        return prepositions.includes(word.toLowerCase());
    }
}
