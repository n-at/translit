(function() {

    $(function() {
        var $text = $('#text');
        var $result = $('#result');

        function changeText() {
            $result.text(transliterate($text.val()));
        }

        $text.change(changeText);
        $text.keyup(changeText);
    });

    function transliterate(text) {
        var result = '';
        for(var idx = 0; idx < text.length; idx++) {
            result += transliterateChar(text[idx]);
        }
        if(result.length == 0) {
            result = 'Transliteration';
        }
        return result;
    }

    function transliterateChar(char) {
        var charLow = char.toLowerCase();
        if(gost_r_52535_1_2006_map[charLow] != undefined) {
            var transliterated = gost_r_52535_1_2006_map[charLow];
            if(charLow != char) {
                transliterated = transliterated.charAt(0).toUpperCase() + transliterated.substring(1);
            }
            return transliterated;
        } else {
            return char;
        }
    }

    var gost_r_52535_1_2006_map = {
        'а': 'a',
        'б': 'b',
        'в': 'v',
        'г': 'g',
        'д': 'd',
        'е': 'e',
        'ё': 'e',
        'ж': 'zh',
        'з': 'z',
        'и': 'i',
        'й': 'i',
        'к': 'k',
        'л': 'l',
        'м': 'm',
        'н': 'n',
        'о': 'o',
        'п': 'p',
        'р': 'r',
        'с': 's',
        'т': 't',
        'у': 'u',
        'ф': 'f',
        'х': 'kh',
        'ц': 'tc',
        'ч': 'ch',
        'ш': 'sh',
        'щ': 'shch',
        'ъ': '',
        'ы': 'y',
        'ь': '',
        'э': 'e',
        'ю': 'iu',
        'я': 'ia'
    };

})();
