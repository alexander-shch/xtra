import React from 'react';
import { SingleMerchantBasicInfo } from './single-merchant-basic-info';
import { SingleMerchantClientCustomisations } from './single-merchant-client-customisations';
import { SingleMerchantConsumerExperience } from './single-merchant-consumer-experience';
import { AppRoute } from '../../../../app-router';
import { Switch, Route, Link } from 'react-router-dom';
import { MerchantProps } from '../../merchants.model';

export const SingleMerchantTabs: React.FC<MerchantProps> = ({merchant}) => {
  const singleMerchantBasicInfoTab = () => <SingleMerchantBasicInfo merchant={merchant} />;
  const singleMerchantClientCustomisationsTab = () => <SingleMerchantClientCustomisations merchant={merchant} />;
  const singleMerchantConsumerExperienceTab = () => <SingleMerchantConsumerExperience merchant={merchant} />;


  const merchantTabs: AppRoute[] = [
    {
      title: 'Basic info',
      component: singleMerchantBasicInfoTab,
      path: `/merchant/${merchant.id}/basic-info`,
      exact: true,
    },
    {
      title: 'Client Customisations',
      component: singleMerchantClientCustomisationsTab,
      path: `/merchant/${merchant.id}/client-customisations`,
      exact: true,
    },
    {
      title: 'Consumer Experience',
      component: singleMerchantConsumerExperienceTab,
      path: `/merchant/${merchant.id}/consumer-experience`,
      exact: true,
    }
  ]

  const isTabActive = (path: string) => {
    return window.location.pathname.includes(path);
  }

    return (
      <div>
        <div className="field is-grouped is-grouped-multiline">
          <div className="control">
            <div className="tags has-addons">
              <span className="tag is-dark">Products</span>
              <span className="tag is-info">{merchant.productsCount}</span>
            </div>
          </div>

          <div className="control">
            <div className="tags has-addons">
              <span className="tag is-dark">Revenue</span>
              <span className="tag is-success">TODO</span>
            </div>
          </div>
        </div>
        <div className='tabs is-boxed'>
          <ul>
            {merchantTabs.map((tab, index) => (
              <li className={isTabActive(tab.path) ? 'is-active' : ''} key={index}>
                <Link to={tab.path}>
                  {tab.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Switch>
          { merchantTabs.map((route: AppRoute, index: number) => 
            <Route key={index} exact={route.exact} path={route.path} render={route.component}/>
          )}
        </Switch>
      </div>
    );
}
