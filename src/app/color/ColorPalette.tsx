"use client"

import { useState } from 'react';

interface ColorPaletteProps {
    initialColors: string[];
}

const ColorPalette: React.FC<ColorPaletteProps> = ({ initialColors }) => {
    const [colors, setColors] = useState(initialColors);

    const handleColorChange = (index: number, newColor: string) => {
        const updatedColors = [...colors];
        updatedColors[index] = newColor;
        setColors(updatedColors);
    };

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
        e.dataTransfer.setData('dragIndex', index.toString());
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>, index: number) => {
        const dragIndex = parseInt(e.dataTransfer.getData('dragIndex'), 10);
        const updatedColors = [...colors];
        const [removed] = updatedColors.splice(dragIndex, 1);
        updatedColors.splice(index, 0, removed);
        setColors(updatedColors);
    };

    const handleCopyColor = (color: string) => {
        navigator.clipboard.writeText(color).then(() => {
            alert(`Copied color: ${color}`);
        }, (err) => {
            console.error('Failed to copy color: ', err);
        });
    };

    return (
        <div className="flex gap-4 bg-white p-4 rounded-lg">
            {colors.map((color, index) => (
                <div
                    key={index}
                    className="w-16 h-16 rounded relative"
                    style={{ backgroundColor: color }}
                    draggable
                    onDragStart={(e) => handleDragStart(e, index)}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => handleDrop(e, index)}
                    onClick={() => handleCopyColor(color)}
                >
                    <input
                        type="color"
                        value={color}
                        onChange={(e) => handleColorChange(index, e.target.value)}
                        className="opacity-0 w-full h-full cursor-pointer"
                    />
                </div>
            ))}
        </div>
    );
};

export default ColorPalette;
