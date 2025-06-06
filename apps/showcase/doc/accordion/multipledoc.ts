import { Code } from '@/domain/code';
import { Component } from '@angular/core';

@Component({
    selector: 'multiple-doc',
    standalone: false,
    template: `
        <app-docsectiontext>
            <p>Only one tab at a time can be active by default, enabling <i>multiple</i> property changes this behavior to allow multiple tabs. In this case <i>activeIndex</i> needs to be an array.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-accordion [value]="['0']" [multiple]="true">
                <p-accordion-panel value="0">
                    <p-accordion-header>Header I</p-accordion-header>
                    <p-accordion-content>
                        <p class="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                            laborum.
                        </p>
                    </p-accordion-content>
                </p-accordion-panel>
                <p-accordion-panel value="1">
                    <p-accordion-header>Header II</p-accordion-header>
                    <p-accordion-content>
                        <p class="m-0">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                            enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                        </p>
                    </p-accordion-content>
                </p-accordion-panel>
                <p-accordion-panel value="2">
                    <p-accordion-header>Header III</p-accordion-header>
                    <p-accordion-content>
                        <p class="m-0">
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                            culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                        </p>
                    </p-accordion-content>
                </p-accordion-panel>
            </p-accordion>
        </div>
        <app-code [code]="code" selector="accordion-multiple-demo"></app-code>
    `
})
export class MultipleDoc {
    code: Code = {
        basic: `<p-accordion [value]="['0']" [multiple]="true">
    <p-accordion-panel value="0">
        <p-accordion-header>Header I</p-accordion-header>
        <p-accordion-content>
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
            </p>
        </p-accordion-content>
    </p-accordion-panel>
    <p-accordion-panel value="1">
        <p-accordion-header>Header II</p-accordion-header>
        <p-accordion-content>
            <p class="m-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
                qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
            </p>
        </p-accordion-content>
    </p-accordion-panel>
    <p-accordion-panel value="2">
        <p-accordion-header>Header III</p-accordion-header>
        <p-accordion-content>
            <p class="m-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
                corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
                expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
            </p>
        </p-accordion-content>
    </p-accordion-panel>
</p-accordion>`,

        html: `<div class="card flex justify-content-center">
    <p-accordion [value]="['0']" [multiple]="true">
        <p-accordion-panel value="0">
            <p-accordion-header>Header I</p-accordion-header>
            <p-accordion-content>
                <p class="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                    laborum.
                </p>
            </p-accordion-content>
        </p-accordion-panel>
        <p-accordion-panel value="1">
            <p-accordion-header>Header II</p-accordion-header>
            <p-accordion-content>
                <p class="m-0">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
                    qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                </p>
            </p-accordion-content>
        </p-accordion-panel>
        <p-accordion-panel value="2">
            <p-accordion-header>Header III</p-accordion-header>
            <p-accordion-content>
                <p class="m-0">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                    culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
                    expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                </p>
            </p-accordion-content>
        </p-accordion-panel>
    </p-accordion>
</div>`,

        typescript: `import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';

@Component({
    selector: 'accordion-multiple-demo',
    templateUrl: './accordion-multiple-demo.html',
    standalone: true,
    imports: [AccordionModule]
})
export class AccordionMultipleDemo {}`
    };
}
