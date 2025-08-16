import React from 'react';
import { Globe } from 'lucide-react';
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/tooltip/tooltip';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/button/button-variants';

export interface LanguageNavProps {}
export const LanguageNav: React.FC<LanguageNavProps> = () => {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <div
                    className={cn(
                        buttonVariants({
                            variant: 'outline',
                            size: 'icon',
                        }),
                        'size-6 rounded-full md:size-8 cursor-default'
                    )}
                >
                    <Globe className="size-3.5 md:size-4" />
                    <span className="sr-only">简体中文</span>
                </div>
            </TooltipTrigger>
            <TooltipContent>简体中文</TooltipContent>
        </Tooltip>
    );
};
