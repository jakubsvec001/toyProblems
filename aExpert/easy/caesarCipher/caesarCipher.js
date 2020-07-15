"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const caesarCipherEncryptor = (word, key) => {
    let result = [];
    let currentAlphaIndex;
    let newIndex;
    word.split('').forEach((item) => {
        currentAlphaIndex = item.charCodeAt(0) - 97;
        newIndex = (currentAlphaIndex + key) % 26;
        result.push(String.fromCharCode(newIndex + 97));
    });
    return result.join('');
};
exports.default = caesarCipherEncryptor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Flc2FyQ2lwaGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2Flc2FyQ2lwaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0EsTUFBTSxxQkFBcUIsR0FBRyxDQUFDLElBQVksRUFBRSxHQUFVLEVBQVMsRUFBRTtJQUNoRSxJQUFJLE1BQU0sR0FBaUIsRUFBRSxDQUFDO0lBQzlCLElBQUksaUJBQXdCLENBQUM7SUFDN0IsSUFBSSxRQUFlLENBQUM7SUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtRQUM5QixpQkFBaUIsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUM1QyxRQUFRLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDMUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUMsQ0FBQyxDQUFBO0lBQ0YsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLENBQUMsQ0FBQTtBQUVELGtCQUFlLHFCQUFxQixDQUFDIn0=