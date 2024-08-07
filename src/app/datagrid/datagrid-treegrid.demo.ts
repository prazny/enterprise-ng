import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
// @ts-ignore
import { SohoBusyIndicatorDirective, SohoDataGridComponent } from 'ids-enterprise-ng';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-datagrid-treegrid-demo',
  template: `  <div class="row">
    <div class="twelve columns demo" role="main">
      <section class="scrollable contained-scrolling-right-bottom height-100">
        <div soho-datagrid
             [treeGrid]="true"
             [columns]="columns"
             [dataset]="data"
             [isList]="true"
             [rowHeight]="'small'"
             [spacerColumn]="true"
        >
        </div>
      </section>
    </div>
  </div>

  <div class="row">
    <div class="twelve columns demo" role="main">
      <section class="scrollable contained-scrolling-right-bottom height-100">
        <div soho-datagrid
             [treeGrid]="true"
             [columns]="columns"
             [dataset]="data2"
             [isList]="true"
             [rowHeight]="'small'"
             [spacerColumn]="true"
        >
        </div>
      </section>
    </div>
  </div>
  `
})
export class DataGridTreeGridDemoComponent {
  @ViewChild(SohoDataGridComponent, { static: true }) dataGrid?: SohoDataGridComponent;
  @ViewChild(SohoBusyIndicatorDirective, { static: true }) busyIndicator?: SohoBusyIndicatorDirective;


  constructor() { }

  public get columns(): SohoDataGridColumn[] {
    return [
      {id: 'taskName', name: 'Task', field: 'taskName', expanded: 'expanded', formatter: Soho.Formatters.Tree, filterType: 'text'},
      {id: 'id', name: 'Id', field: 'id', filterType: 'text', },
      {id: 'desc', name: 'Description', field: 'desc', filterType: 'text'},
      {id: 'comments', name: 'Comments', field: 'comments', formatter: Soho.Formatters.Hyperlink, filterType: 'text', },
      {id: 'time', name: 'Time', field: 'time', filterType: 'time' },
    ]
  }

  public get data(): any[] {
    return [
      {id: 1, escalated: 2, depth: 1, expanded: false, taskName: 'Follow up ', desc: '', comments: null, time: '', children: [
          {id: 2, escalated: 1, depth: 2, taskName: 'Quotes due to expire',  desc: 'Update.', comments: 3, time: '7:10 AM'},
          {id: 3, escalated: 0, depth: 2, taskName: 'Follow up action s', desc: 'Contact sales representative with the updated purchase order.', comments: 2, time: '9:10 AM'},
          {id: 4, escalated: 0, depth: 2, taskName: 'Follow up action ', desc: 'Contact sales representative with the updated purchase order.', comments: 2, time: '14:10 PM'},
        ]
      },
      {id: 5, escalated: 0, depth: 1, taskName: 'Follow up action wi', desc: 'Contact', comments: 2, time: '18:10 PM'},
      {id: 6, escalated: 0, depth: 1, taskName: 'Follow up ', desc: 'Contact ', comments: 2, time: '20:10 PM'},
      {id: 7, escalated: 0, depth: 1, expanded: true, taskName: 'Follow up action with Residental Housing', desc: 'Contact.', comments: 2, time: '22:10 PM', children: [
          {id: 8, escalated: 0, depth: 2, taskName: 'Follow up action with Universal HMM Logistics', desc: 'Contact sales representative.  up action with Residental Shipping Logist', comments: 2, time: '22:10 PM'},
          {id: 9, escalated: 0, depth: 2, taskName: 'Follow up action with Acme Shipping', desc: 'Contact representative representative.', comments: 2, time: '22:10 PM'},
          {id: 10, escalated: 0, depth: 2, expanded: true, taskName: 'Follow up action with Residental Shipping Logistics ', desc: 'Contact representative representative.', comments: 2, time: '7:04 AM', children: [
            ]
          }
        ]
      }
    ];
  }

  public get data2(): any[] {
    return [
      {id: 1, escalated: 2, depth: 1, expanded: false, taskName: 'Follow up ', desc: '', comments: null, time: '', children: [
          {id: 2, escalated: 1, depth: 2, taskName: 'Quotes due to expire',  desc: 'Update.', comments: 3, time: '7:10 AM'},
          {id: 3, escalated: 0, depth: 2, taskName: 'Follow up action s', desc: 'Contact sales representative with the updated purchase order.', comments: 2, time: '9:10 AM'},
          {id: 4, escalated: 0, depth: 2, taskName: 'Follow up action ', desc: 'Contact sales representative with the updated purchase order.', comments: 2, time: '14:10 PM'},
        ]
      },
      {id: 5, escalated: 0, depth: 1, taskName: 'Follow up action wi', desc: 'Contact', comments: 2, time: '18:10 PM'},
      {id: 6, escalated: 0, depth: 1, taskName: 'Follow up ', desc: 'Contact ', comments: 2, time: '20:10 PM'},
      {id: 7, escalated: 0, depth: 1, expanded: true, taskName: 'Follow up action with Residental Housing', desc: 'Contact representative representative. Contact representative representative.', comments: 2, time: '22:10 PM', children: [
          {id: 8, escalated: 0, depth: 2, taskName: 'Follow up action with Universal HMM Logistics', desc: 'Contact sales representative.  up action with Residental Shipping Logist', comments: 2, time: '22:10 PM'},
          {id: 9, escalated: 0, depth: 2, taskName: 'Follow up action with Acme Shipping', desc: 'Contact representative representative.', comments: 2, time: '22:10 PM'},
          {id: 10, escalated: 0, depth: 2, expanded: true, taskName: 'Follow up action with Residental Shipping Logistics ', desc: 'Contact representative representative.', comments: 2, time: '7:04 AM', children: [
            ]
          }
        ]
      }
    ];
  }
}
